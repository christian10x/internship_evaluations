import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users.schema';
import { assignments } from './assignments.schema';

export const assistances = pgTable('assistances', {
  id: serial('id').primaryKey(),
  userIdAssistant: integer('user_id_assistant')
    .references(() => users.id)
    .notNull(),
  assigmentId: integer('assigment_id')
    .references(() => assignments.id)
    .notNull(),
  assisted: integer('assisted').notNull(),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()),
  updatedAt: timestamp('updated_at').$onUpdateFn(() => new Date()),
});

export type Assistance = typeof assistances.$inferSelect;
export type NewAssistance = typeof assistances.$inferInsert;
