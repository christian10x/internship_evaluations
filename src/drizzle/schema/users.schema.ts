import { sql, SQL } from 'drizzle-orm';
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { roles } from './roles.schema';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  code: text('code')
    .generatedAlwaysAs((): SQL => sql`${users.year} || ${users.dni}`)
    .unique(),
  name: varchar('name').notNull(),
  lastName: varchar('last_name').notNull(),
  dni: varchar('dni').unique().notNull(),
  email: varchar('email').unique().notNull(),
  password: varchar('password').notNull(),
  roleId: integer('role_id')
    .references(() => roles.id)
    .notNull(),
  year: varchar('year').$defaultFn(() => new Date().getFullYear().toString()),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()),
  updatedAt: timestamp('updated_at').$onUpdateFn(() => new Date()),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
