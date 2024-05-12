import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema  from './schema';
const sql = neon("postgresql://neondb_owner:qfnM63omNrlY@ep-broad-math-a5ncungr.us-east-2.aws.neon.tech/note-ideas?sslmode=require");
export const db = drizzle(sql,{schema});

