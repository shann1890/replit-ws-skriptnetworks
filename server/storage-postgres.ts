import { eq, desc } from "drizzle-orm";
import { getDatabase, schema } from "./db";
import { type User, type InsertUser, type Article, type InsertArticle } from "@shared/schema";
import type { IStorage } from "./storage";

export class PostgresStorage implements IStorage {
  private db = getDatabase();

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(schema.users).where(eq(schema.users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await this.db.insert(schema.users).values(insertUser).returning();
    return result[0];
  }

  // Article methods
  async getArticles(): Promise<Article[]> {
    return await this.db.select().from(schema.articles).orderBy(desc(schema.articles.createdAt));
  }

  async getPublishedArticles(): Promise<Article[]> {
    return await this.db.select().from(schema.articles)
      .where(eq(schema.articles.published, true))
      .orderBy(desc(schema.articles.createdAt));
  }

  async getArticle(id: string): Promise<Article | undefined> {
    const result = await this.db.select().from(schema.articles).where(eq(schema.articles.id, id)).limit(1);
    return result[0];
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const articleData = {
      ...insertArticle,
      tags: insertArticle.tags || [],
      published: insertArticle.published ?? false,
    };
    
    const result = await this.db.insert(schema.articles).values(articleData).returning();
    return result[0];
  }

  async updateArticle(id: string, updateData: Partial<InsertArticle>): Promise<Article | undefined> {
    const result = await this.db.update(schema.articles)
      .set({ ...updateData, updatedAt: new Date() })
      .where(eq(schema.articles.id, id))
      .returning();
    
    return result[0];
  }

  async deleteArticle(id: string): Promise<boolean> {
    const result = await this.db.delete(schema.articles).where(eq(schema.articles.id, id)).returning();
    return result.length > 0;
  }
}