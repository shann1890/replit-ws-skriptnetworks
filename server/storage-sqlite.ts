import { eq, desc } from "drizzle-orm";
import { getDatabase, schema } from "./db";
import { type User, type InsertUser, type Article, type InsertArticle } from "@shared/schema";
import type { IStorage } from "./storage";
import { randomUUID } from "crypto";

export class SQLiteStorage implements IStorage {
  private db: any;
  
  constructor() {
    this.initializeDb();
  }
  
  private async initializeDb() {
    this.db = await getDatabase();
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    if (!this.db) await this.initializeDb();
    const result = this.db.select().from(schema.users).where(eq(schema.users.id, id)).get();
    return result || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    if (!this.db) await this.initializeDb();
    const result = this.db.select().from(schema.users).where(eq(schema.users.username, username)).get();
    return result || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    if (!this.db) await this.initializeDb();
    const id = randomUUID();
    const user = { ...insertUser, id };
    
    this.db.insert(schema.users).values(user).run();
    return user;
  }

  // Article methods
  async getArticles(): Promise<Article[]> {
    if (!this.db) await this.initializeDb();
    const results = this.db.select().from(schema.articles).orderBy(desc(schema.articles.createdAt)).all();
    return results.map(this.deserializeArticle);
  }

  async getPublishedArticles(): Promise<Article[]> {
    if (!this.db) await this.initializeDb();
    const results = this.db.select().from(schema.articles)
      .where(eq(schema.articles.published, true))
      .orderBy(desc(schema.articles.createdAt))
      .all();
    return results.map(this.deserializeArticle);
  }

  async getArticle(id: string): Promise<Article | undefined> {
    if (!this.db) await this.initializeDb();
    const result = this.db.select().from(schema.articles).where(eq(schema.articles.id, id)).get();
    return result ? this.deserializeArticle(result) : undefined;
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    if (!this.db) await this.initializeDb();
    const id = randomUUID();
    const now = new Date().toISOString();
    
    const articleData = {
      ...insertArticle,
      id,
      tags: JSON.stringify(insertArticle.tags || []) as string,
      published: insertArticle.published ?? false,
      createdAt: now,
      updatedAt: now
    };
    
    this.db.insert(schema.articles).values(articleData).run();
    
    return {
      ...articleData,
      tags: insertArticle.tags || [],
      createdAt: now,
      updatedAt: now
    };
  }

  async updateArticle(id: string, updateData: Partial<InsertArticle>): Promise<Article | undefined> {
    if (!this.db) await this.initializeDb();
    const now = new Date().toISOString();
    const serializedData: any = {
      ...updateData,
      updatedAt: now
    };
    
    // Serialize tags if provided
    if (updateData.tags) {
      serializedData.tags = JSON.stringify(updateData.tags);
    }
    
    const result = this.db.update(schema.articles)
      .set(serializedData)
      .where(eq(schema.articles.id, id))
      .returning()
      .get();
    
    return result ? this.deserializeArticle(result) : undefined;
  }

  async deleteArticle(id: string): Promise<boolean> {
    if (!this.db) await this.initializeDb();
    const result = this.db.delete(schema.articles).where(eq(schema.articles.id, id)).run();
    return result.changes > 0;
  }

  // Helper method to deserialize SQLite data back to proper types
  private deserializeArticle(dbArticle: any): Article {
    return {
      ...dbArticle,
      tags: JSON.parse(dbArticle.tags || '[]'),
      published: Boolean(dbArticle.published),
      createdAt: dbArticle.createdAt,
      updatedAt: dbArticle.updatedAt
    };
  }
}