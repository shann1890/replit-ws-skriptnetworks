import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from '@shared/schema';
import { join } from 'path';

let db: ReturnType<typeof drizzle> | null = null;

export async function getDatabase() {
  if (!db) {
    // Create SQLite database file in the data directory
    const dbPath = process.env.DATABASE_PATH || join(process.cwd(), 'data', 'skriptnetworks.db');
    
    // Ensure data directory exists
    const { existsSync, mkdirSync } = await import('fs');
    const dataDir = join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, { recursive: true });
    }
    
    const sqlite = new Database(dbPath);
    sqlite.pragma('journal_mode = WAL'); // Enable WAL mode for better performance
    
    db = drizzle(sqlite, { schema });
    
    // Create tables if they don't exist
    initializeTables(db);
  }
  
  return db;
}

function initializeTables(database: ReturnType<typeof drizzle>) {
  try {
    // Create users table
    database.run(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )
    `);

    // Create articles table
    database.run(`
      CREATE TABLE IF NOT EXISTS articles (
        id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6)))),
        title TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        category TEXT NOT NULL,
        tags TEXT NOT NULL DEFAULT '[]',
        published INTEGER NOT NULL DEFAULT 0,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        updated_at TEXT NOT NULL DEFAULT (datetime('now'))
      )
    `);

    // Create indexes for better performance
    database.run('CREATE INDEX IF NOT EXISTS idx_articles_published ON articles(published)');
    database.run('CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category)');
    database.run('CREATE INDEX IF NOT EXISTS idx_articles_created_at ON articles(created_at DESC)');
    
    console.log('✅ SQLite database initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing SQLite tables:', error);
  }
}

export { schema };