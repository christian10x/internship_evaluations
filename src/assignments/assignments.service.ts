import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class AssignmentsService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    const [assignment] = await this.db
      .insert(schema.assignments)
      .values(createAssignmentDto)
      .returning();

    if (!assignment) throw new BadRequestException('Error creating assignment');

    return assignment;
  }

  async findAll() {
    const assignments = await this.db.select().from(schema.assignments);
    return assignments;
  }

  async findOne(id: number) {
    const [assignment] = await this.db
      .select()
      .from(schema.assignments)
      .where(eq(schema.assignments.id, id));

    if (!assignment) throw new NotFoundException('Assignment not found');

    return assignment;
  }

  async update(id: number, updateAssignmentDto: UpdateAssignmentDto) {
    const [assignment] = await this.db
      .select()
      .from(schema.assignments)
      .where(eq(schema.assignments.id, id));

    if (!assignment) throw new NotFoundException('Assignment not found');

    const [updatedAssignment] = await this.db
      .update(schema.assignments)
      .set(updateAssignmentDto)
      .where(eq(schema.assignments.id, id))
      .returning();

    if (!updatedAssignment)
      throw new BadRequestException('Error updating assignment');

    return updatedAssignment;
  }

  async remove(id: number) {
    const [assignment] = await this.db
      .select()
      .from(schema.assignments)
      .where(eq(schema.assignments.id, id));

    if (!assignment) throw new NotFoundException('Assignment not found');

    const [deletedAssignment] = await this.db
      .delete(schema.assignments)
      .where(eq(schema.assignments.id, id))
      .returning();

    if (!deletedAssignment)
      throw new BadRequestException('Error deleting assignment');

    return deletedAssignment;
  }
}
