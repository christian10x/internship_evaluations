import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

export const DrizzleAsyncProvider = 'DrizzleProvider';

export const DrizzleProvider = [
  {
    provide: DrizzleAsyncProvider,
    useFactory: async () => {
      const poolConnection = new Pool({
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        database: process.env.DATABASE_NAME,
        ssl: process.env.DATABASE_SSL === 'true',
      });

      const db = drizzle(poolConnection, { schema });

      return db;
    },
    export: [DrizzleAsyncProvider],
  },
];
