import { pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const sections = pgTable('sections', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  createdAt: timestamp('created_at').$defaultFn(() => new Date()),
  updatedAt: timestamp('updated_at').$onUpdateFn(() => new Date()),
});

export type Section = typeof sections.$inferSelect;
export type NewSection = typeof sections.$inferInsert;
