import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { courses } from './courses.schema';
import { sections } from './sections.schema';
import { users } from './users.schema';

export const assignments = pgTable('assignments', {
  id: serial('id').primaryKey(),
  courseId: integer('course_id')
    .references(() => courses.id)
    .notNull(),
  sectionId: integer('section_id')
    .references(() => sections.id)
    .notNull(),
  session: integer('session').notNull(),
  userIdAssigned: integer('user_id_assigned')
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()),
  updatedAt: timestamp('updated_at').$onUpdateFn(() => new Date()),
});

export type Assignment = typeof assignments.$inferSelect;
export type NewAssignment = typeof assignments.$inferInsert;
