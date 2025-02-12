// src/database/index.ts

import { PostgresDatabaseAdapter } from '@elizaos/adapter-postgres';
import { SqliteDatabaseAdapter } from '@elizaos/adapter-sqlite';
import Database from 'better-sqlite3';
import path from 'path';

export function initializeDatabase(dataDir: string) {
  if (process.env.POSTGRES_URL) {
    const db = new PostgresDatabaseAdapter({ connectionString: process.env.POSTGRES_URL });
    return db;
  } else {
    const filePath = process.env.SQLITE_FILE ?? path.resolve(dataDir, 'db.sqlite');
    const db = new SqliteDatabaseAdapter(new Database(filePath));
    return db;
  }
}
