import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DrizzleAsyncProvider } from 'src/drizzle/drizzle.provider';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../drizzle/schema';
import { and, eq, sql } from 'drizzle-orm';
import { CrearAsistenciaDto } from './dto/crear-asistencia.dto';
import { ActualizarAsistenciaDto } from './dto/actualizar-asistencia.dto';

@Injectable()
export class AssistancesService {
  constructor(
    @Inject(DrizzleAsyncProvider) private db: NodePgDatabase<typeof schema>,
  ) {}

  async create(crearAsistenciaDto: CrearAsistenciaDto) {
    const { cursoId, seccionId, sesion, alumnoId } = crearAsistenciaDto;

    const [studentExists] = await this.db
      .select()
      .from(schema.users)
      .where(and(eq(schema.users.id, alumnoId), eq(schema.users.roleId, 3)));

    if (!studentExists)
      throw new NotFoundException('Student not found or is not a student');

    const [assignment] = await this.db
      .select()
      .from(schema.assignments)
      .where(
        and(
          eq(schema.assignments.courseId, cursoId),
          eq(schema.assignments.sectionId, seccionId),
          eq(schema.assignments.session, sesion),
        ),
      );

    if (!assignment)
      throw new NotFoundException('Course, section or session not found');

    const [assistanceExists] = await this.db
      .select()
      .from(schema.assistances)
      .where(
        and(
          eq(schema.assistances.assigmentId, assignment.id),
          eq(schema.assistances.userIdAssistant, alumnoId),
        ),
      );

    if (assistanceExists)
      throw new BadRequestException('Assistance already exists');

    const [assistance] = await this.db
      .insert(schema.assistances)
      .values({
        assigmentId: assignment.id,
        userIdAssistant: crearAsistenciaDto.alumnoId,
        assisted: crearAsistenciaDto.asistencia,
      })
      .returning();

    if (!assistance) throw new BadRequestException('Error creating assistance');

    return assistance;
  }

  async findAll() {
    const assistances = await this.db.select().from(schema.assistances);
    return assistances;
  }

  async findOne(id: number) {
    const [assistance] = await this.db
      .select()
      .from(schema.assistances)
      .where(eq(schema.assistances.id, id));

    if (!assistance) throw new NotFoundException('Assistance not found');

    return assistance;
  }

  async update(id: number, actualizarAsistenciaDto: ActualizarAsistenciaDto) {
    const { cursoId, seccionId, sesion, alumnoId } = actualizarAsistenciaDto;

    const [studentExists] = await this.db
      .select()
      .from(schema.users)
      .where(
        and(eq(schema.users.id, alumnoId ?? null), eq(schema.users.roleId, 3)),
      );

    if (!studentExists)
      throw new NotFoundException('Student not found or is not a student');

    const [assignment] = await this.db
      .select()
      .from(schema.assignments)
      .where(
        and(
          eq(schema.assignments.courseId, cursoId ?? null),
          eq(schema.assignments.sectionId, seccionId ?? null),
          eq(schema.assignments.session, sesion ?? null),
        ),
      );

    if (!assignment)
      throw new NotFoundException('Course, section or session not found');

    const [assistance] = await this.db
      .select()
      .from(schema.assistances)
      .where(eq(schema.assistances.id, id));

    if (!assistance) throw new NotFoundException('Assistance not found');

    const [assistanceExists] = await this.db
      .select()
      .from(schema.assistances)
      .where(
        and(
          eq(schema.assistances.assigmentId, assignment.id),
          eq(schema.assistances.userIdAssistant, alumnoId ?? null),
        ),
      );

    if (!assistanceExists)
      throw new BadRequestException('Assistance does not exist');

    const [updatedAssistance] = await this.db
      .update(schema.assistances)
      .set({
        assigmentId: assignment.id,
        userIdAssistant: alumnoId,
        assisted: actualizarAsistenciaDto.asistencia,
      })
      .where(eq(schema.assistances.id, id))
      .returning();

    if (!updatedAssistance)
      throw new BadRequestException('Error updating assistance');

    return updatedAssistance;
  }

  async remove(id: number) {
    const [assistance] = await this.db
      .select()
      .from(schema.assistances)
      .where(eq(schema.assistances.id, id));

    if (!assistance) throw new NotFoundException('Assistance not found');

    const [deletedAssistance] = await this.db
      .delete(schema.assistances)
      .where(eq(schema.assistances.id, id))
      .returning();

    if (!deletedAssistance)
      throw new BadRequestException('Error deleting assistance');

    return deletedAssistance;
  }

  async findByStudentId(studentId: number) {
    const result = await this.db
      .select({
        curso: schema.courses.name,
        seccion: schema.sections.name,
        sesion: schema.assignments.session,
        alumno: sql<string>`${schema.users.name} || ' ' || ${schema.users.lastName}`,
        fecha: schema.assistances.createdAt,
        asistencia: schema.assistances.assisted,
      })
      .from(schema.assistances)
      .innerJoin(
        schema.assignments,
        eq(schema.assignments.id, schema.assistances.assigmentId),
      )
      .innerJoin(
        schema.courses,
        eq(schema.courses.id, schema.assignments.courseId),
      )
      .innerJoin(
        schema.sections,
        eq(schema.sections.id, schema.assignments.sectionId),
      )
      .innerJoin(
        schema.users,
        eq(schema.users.id, schema.assistances.userIdAssistant),
      )
      .where(eq(schema.assistances.userIdAssistant, studentId));

    if (!result) throw new NotFoundException('Assistances not found');

    return result;
  }

  async findStudentsByCourseAndSection(courseId: number, sectionId: number) {
    const result = await this.db
      .select({
        alumno: sql<string>`${schema.users.name} || ' ' || ${schema.users.lastName}`,
      })
      .from(schema.assignments)
      .innerJoin(
        schema.assistances,
        eq(schema.assistances.assigmentId, schema.assignments.id),
      )
      .innerJoin(
        schema.users,
        eq(schema.users.id, schema.assistances.userIdAssistant),
      )
      .where(
        and(
          eq(schema.assignments.courseId, courseId),
          eq(schema.assignments.sectionId, sectionId),
        ),
      )
      .groupBy(
        sql<string>`${schema.users.name} || ' ' || ${schema.users.lastName}`,
      );

    if (!result) throw new NotFoundException('Assistances not found');

    return result;
  }

  async findByCourseAndSection(courseId: number, sectionId: number) {
    const result = await this.db
      .select({
        curso: { id: schema.courses.id, nombre: schema.courses.name },
        seccion: { id: schema.sections.id, nombre: schema.sections.name },
        sesion: schema.assignments.session,
        alumno: {
          id: schema.assistances.userIdAssistant,
          codigo: schema.users.code,
          nombre: schema.users.name,
          apellido: schema.users.lastName,
        },
        fecha: schema.assistances.createdAt,
        asistencia: schema.assistances.assisted,
      })
      .from(schema.assistances)
      .innerJoin(
        schema.assignments,
        eq(schema.assignments.id, schema.assistances.assigmentId),
      )
      .innerJoin(schema.courses, eq(schema.courses.id, courseId))
      .innerJoin(schema.sections, eq(schema.sections.id, sectionId))
      .innerJoin(
        schema.users,
        eq(schema.users.id, schema.assistances.userIdAssistant),
      );

    if (!result) throw new NotFoundException('Assistances not found');

    return result;
  }
}
