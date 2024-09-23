import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      if (createUserDto.roleId) {
        const [role] = await this.db
          .select()
          .from(schema.roles)
          .where(eq(schema.roles.id, createUserDto.roleId));

        if (!role) throw new NotFoundException('Role not found');
      }

      const [user] = await this.db
        .insert(schema.users)
        .values(createUserDto)
        .returning();

      if (!user) throw new BadRequestException('Error creating user');

      return user;
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('User already exists');
      }

      throw new Error(error.message);
    }
  }

  async findAll() {
    const users = await this.db.select().from(schema.users);
    return users;
  }

  async findOne(id: number) {
    const [user] = await this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, id));

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async findOneByEmail(email: string) {
    const [user] = await this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.email, email));

    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      if (updateUserDto.roleId) {
        const [role] = await this.db
          .select()
          .from(schema.roles)
          .where(eq(schema.roles.id, updateUserDto.roleId));

        if (!role) throw new NotFoundException('Role not found');
      }

      const [user] = await this.db
        .select()
        .from(schema.users)
        .where(eq(schema.users.id, id));

      if (!user) throw new NotFoundException('User not found');

      const [updatedUser] = await this.db
        .update(schema.users)
        .set(updateUserDto)
        .where(eq(schema.users.id, id))
        .returning();

      if (!updatedUser) throw new BadRequestException('Error updating user');

      return updatedUser;
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('User already exists');
      }

      throw new Error(error.message);
    }
  }

  async remove(id: number) {
    const [user] = await this.db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, id));

    if (!user) throw new NotFoundException('User not found');

    const [deletedUser] = await this.db
      .delete(schema.users)
      .where(eq(schema.users.id, id))
      .returning();

    if (!deletedUser) throw new BadRequestException('Error deleting user');

    return deletedUser;
  }
}
