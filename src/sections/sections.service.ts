import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class SectionsService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(createSectionDto: CreateSectionDto) {
    const [section] = await this.db
      .insert(schema.sections)
      .values(createSectionDto)
      .returning();

    if (!section) throw new BadRequestException('Error creating section');

    return section;
  }

  async findAll() {
    const sections = await this.db.select().from(schema.sections);
    return sections;
  }

  async findOne(id: number) {
    const [section] = await this.db
      .select()
      .from(schema.sections)
      .where(eq(schema.sections.id, id));

    if (!section) throw new NotFoundException('Section not found');

    return section;
  }

  async update(id: number, updateSectionDto: UpdateSectionDto) {
    const [section] = await this.db
      .select()
      .from(schema.sections)
      .where(eq(schema.sections.id, id));

    if (!section) throw new NotFoundException('Section not found');

    const [updatedSection] = await this.db
      .update(schema.sections)
      .set(updateSectionDto)
      .where(eq(schema.sections.id, id))
      .returning();

    if (!updatedSection)
      throw new BadRequestException('Error updating section');

    return updatedSection;
  }

  async remove(id: number) {
    const [section] = await this.db
      .select()
      .from(schema.sections)
      .where(eq(schema.sections.id, id));

    if (!section) throw new NotFoundException('Section not found');

    const [deletedSection] = await this.db
      .delete(schema.sections)
      .where(eq(schema.sections.id, id))
      .returning();

    if (!deletedSection)
      throw new BadRequestException('Error deleting section');

    return deletedSection;
  }
}
