import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';
import * as bcryptjs from 'bcryptjs';
import 'dotenv/config';

const main = async () => {
  console.log('🚀 Seed Started 🚀');

  const client = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    database: process.env.DATABASE_NAME,
    ssl: process.env.DATABASE_SSL === 'true',
  });

  const db = drizzle(client);

  // ROLES
  const dataRoles: schema.NewRole[] = [];
  dataRoles.push(
    { name: 'ADMINISTRADOR' },
    { name: 'PROFESOR' },
    { name: 'ESTUDIANTE' },
  );
  const roles = await db.insert(schema.roles).values(dataRoles).returning();
  if (roles) console.log('Roles created successfully');

  // USERS
  const dataUsers: schema.NewUser[] = [];
  const hashedPassword = await bcryptjs.hash('XpeditionTraineeUTP', 10);
  dataUsers.push(
    {
      name: 'José',
      lastName: 'Inga',
      email: 'jose.inga@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050625',
      roleId: 1, // ADMINISTRADOR
    },
    {
      name: 'Leonel',
      lastName: 'Quintana',
      email: 'leonel.quintana@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050626',
      roleId: 2, // PROFESOR
    },
    {
      name: 'Docente',
      lastName: 'Matemática',
      email: 'docente.matematica@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050627',
      roleId: 2, // PROFESOR
    },
    {
      name: 'Docente',
      lastName: 'Física',
      email: 'docente.fisica@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050628',
      roleId: 2, // PROFESOR
    },
    {
      name: 'Docente',
      lastName: 'Fundamentos de Programación',
      email: 'docente.programacion@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050629',
      roleId: 2, // PROFESOR
    },
    {
      name: 'Docente',
      lastName: 'Base de Datos',
      email: 'docente.basededatos@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050630',
      roleId: 2, // PROFESOR
    },
    {
      name: 'Jakub',
      lastName: 'Skraly',
      email: 'jakub.skraly@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050631',
      roleId: 3, // ESTUDIANTE
    },
    {
      name: 'Estudiante',
      lastName: '02',
      email: 'estudiante.02@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050632',
      roleId: 3, // ESTUDIANTE
    },
    {
      name: 'Estudiante',
      lastName: '03',
      email: 'estudiante.03@utp.edu.pe',
      password: hashedPassword, // XpeditionTraineeUTP
      dni: '72050633',
      roleId: 3, // ESTUDIANTE
    },
  );
  const users = await db.insert(schema.users).values(dataUsers).returning();
  if (users) console.log('Users created successfully');

  // COURSES
  const dataCourses: schema.NewCourse[] = [];
  dataCourses.push(
    { name: 'Matemática', year: 2024 },
    { name: 'Física', year: 2024 },
    { name: 'Química', year: 2024 },
    { name: 'Fundamentos de Programación', year: 2024 },
    { name: 'Algoritmos y Estructuras de Datos', year: 2024 },
    { name: 'Inteligencia Artificial', year: 2024 },
    { name: 'Sistemas Operativos', year: 2024 },
    { name: 'Redes de Computadoras', year: 2024 },
    { name: 'Base de Datos', year: 2024 },
    { name: 'Diseño de Software', year: 2024 },
    { name: 'Ingeniería de Software', year: 2024 },
    { name: 'Desarrollo Web', year: 2024 },
    { name: 'Desarrollo Móvil', year: 2024 },
    { name: 'Desarrollo de Videojuegos', year: 2024 },
  );
  const courses = await db
    .insert(schema.courses)
    .values(dataCourses)
    .returning();
  if (courses) console.log('Courses created successfully');

  // SECTIONS
  const dataSections: schema.NewSection[] = [];
  dataSections.push(
    { name: 'A01' },
    { name: 'A02' },
    { name: 'A03' },
    { name: 'B01' },
    { name: 'B02' },
    { name: 'B03' },
    { name: 'C01' },
    { name: 'C02' },
    { name: 'C03' },
  );
  const sections = await db
    .insert(schema.sections)
    .values(dataSections)
    .returning();
  if (sections) console.log('Sections created successfully');

  // ASSIGNMENTS
  const dataAssignments: schema.NewAssignment[] = [];
  for (let i = 1; i < 19; i++) {
    dataAssignments.push({
      courseId: 1, // CURSO: Matemática
      sectionId: 1, // SECCIÓN: A01
      session: i,
      userIdAssigned: 3, // PROFESOR: Matemática
    });
  }
  for (let i = 1; i < 19; i++) {
    dataAssignments.push({
      courseId: 4, // CURSO: Fundamentos de Programación
      sectionId: 4, // SECCIÓN: B01
      session: i,
      userIdAssigned: 5, // PROFESOR: Fundamentos de Programación
    });
  }
  for (let i = 1; i < 19; i++) {
    dataAssignments.push({
      courseId: 9, // CURSO: Base de Datos
      sectionId: 7, // SECCIÓN: C01
      session: i,
      userIdAssigned: 6, // PROFESOR: Base de Datos
    });
  }
  const assignments = await db
    .insert(schema.assignments)
    .values(dataAssignments)
    .returning();
  if (assignments) console.log('Assignments created successfully');

  // ASSISTANCES
  const dataAssistances: schema.NewAssistance[] = [];
  for (let i = 1; i < 19; i++) {
    dataAssistances.push({
      userIdAssistant: 7, // ESTUDIANTE: Jakub Skraly
      assigmentId: i, // ASIGNACIÓN: Matemática - A01
      assisted: 1,
    });
  }
  for (let i = 19; i < 37; i++) {
    dataAssistances.push({
      userIdAssistant: 8, // ESTUDIANTE: Estudiante 02
      assigmentId: i, // ASIGNACIÓN: Fundamentos de Programación - B01
      assisted: 0,
    });
  }
  for (let i = 37; i < 55; i++) {
    dataAssistances.push({
      userIdAssistant: 9, // ESTUDIANTE: Estudiante 03
      assigmentId: i, // ASIGNACIÓN: Base de Datos - C01
      assisted: 1,
    });
  }
  for (let i = 37; i < 55; i++) {
    dataAssistances.push({
      userIdAssistant: 7, // ESTUDIANTE: Jakub Skraly
      assigmentId: i, // ASIGNACIÓN: Base de Datos - C01
      assisted: 0,
    });
  }
  const assistances = await db
    .insert(schema.assistances)
    .values(dataAssistances)
    .returning();
  if (assistances) console.log('Assistances created successfully');

  console.log('✨ Seed Completed ✨');
};

main();
