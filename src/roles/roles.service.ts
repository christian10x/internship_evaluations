import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class RolesService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const [role] = await this.db
      .insert(schema.roles)
      .values(createRoleDto)
      .returning();

    if (!role) throw new BadRequestException('Error creating role');

    return role;
  }

  async findAll() {
    const roles = await this.db.select().from(schema.roles);
    return roles;
  }

  async findOne(id: number) {
    const [role] = await this.db
      .select()
      .from(schema.roles)
      .where(eq(schema.roles.id, id));

    if (!role) throw new NotFoundException('Role not found');

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const [role] = await this.db
      .select()
      .from(schema.roles)
      .where(eq(schema.roles.id, id));

    if (!role) throw new NotFoundException('Role not found');

    const [updatedRole] = await this.db
      .update(schema.roles)
      .set(updateRoleDto)
      .where(eq(schema.roles.id, id))
      .returning();

    if (!updatedRole) throw new BadRequestException('Error updating role');

    return updatedRole;
  }

  async remove(id: number) {
    const [role] = await this.db
      .select()
      .from(schema.roles)
      .where(eq(schema.roles.id, id));

    if (!role) throw new NotFoundException('Role not found');

    const [deletedRole] = await this.db
      .delete(schema.roles)
      .where(eq(schema.roles.id, id))
      .returning();

    if (!deletedRole) throw new BadRequestException('Error deleting role');

    return deletedRole;
  }
}
