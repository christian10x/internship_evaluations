import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class CoursesService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const [course] = await this.db
      .insert(schema.courses)
      .values(createCourseDto)
      .returning();

    if (!course) throw new BadRequestException('Error creating course');

    return course;
  }

  async findAll() {
    const courses = await this.db.select().from(schema.courses);
    return courses;
  }

  async findOne(id: number) {
    const [course] = await this.db
      .select()
      .from(schema.courses)
      .where(eq(schema.courses.id, id));

    if (!course) throw new NotFoundException('Course not found');

    return course;
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const [course] = await this.db
      .select()
      .from(schema.courses)
      .where(eq(schema.courses.id, id));

    if (!course) throw new NotFoundException('Course not found');

    const [updatedCourse] = await this.db
      .update(schema.courses)
      .set(updateCourseDto)
      .where(eq(schema.courses.id, id))
      .returning();

    if (!updatedCourse) throw new BadRequestException('Error updating course');

    return updatedCourse;
  }

  async remove(id: number) {
    const [course] = await this.db
      .select()
      .from(schema.courses)
      .where(eq(schema.courses.id, id));

    if (!course) throw new NotFoundException('Course not found');

    const [deletedCourse] = await this.db
      .delete(schema.courses)
      .where(eq(schema.courses.id, id))
      .returning();

    if (!deletedCourse) throw new BadRequestException('Error deleting course');

    return deletedCourse;
  }
}
