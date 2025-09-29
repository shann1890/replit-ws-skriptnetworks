import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertArticleSchema, contactFormSchema, type ContactFormData } from "@shared/schema";
import { sendContactFormEmail } from "./email";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog API routes
  app.get("/api/articles", async (req, res) => {
    try {
      const articles = await storage.getPublishedArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  app.get("/api/articles/:id", async (req, res) => {
    try {
      const article = await storage.getArticle(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch article" });
    }
  });

  // Contact form endpoint with SendGrid email integration
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate contact form data using Zod schema
      const validatedData: ContactFormData = contactFormSchema.parse(req.body);
      
      console.log("Contact form submission:", validatedData);
      
      // Send email using Mailgun
      console.log("📧 Attempting to send contact form emails...");
      const emailSent = await sendContactFormEmail(validatedData);
      
      if (emailSent) {
        console.log("✅ Contact form emails sent successfully");
        res.json({ 
          success: true, 
          message: "Message sent successfully! We'll get back to you within 24 hours." 
        });
      } else {
        // Email sending failed - return error to user so they know to try again
        console.error("❌ Email sending failed for contact form submission");
        res.status(500).json({ 
          error: "Failed to send message. Please try again or contact us directly at info@skriptnetworks.com" 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: error.errors.map(err => `${err.path.join('.')}: ${err.message}`)
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process message. Please try again later." });
    }
  });

  // Admin routes for article management (in production, these would require authentication)
  app.get("/api/admin/articles", async (req, res) => {
    try {
      const articles = await storage.getArticles(); // Include unpublished articles
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  });

  app.post("/api/admin/articles", async (req, res) => {
    try {
      const validatedData = insertArticleSchema.parse(req.body);
      const article = await storage.createArticle(validatedData);
      res.status(201).json(article);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid article data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to create article" });
    }
  });

  app.put("/api/admin/articles/:id", async (req, res) => {
    try {
      const validatedData = insertArticleSchema.partial().parse(req.body);
      const article = await storage.updateArticle(req.params.id, validatedData);
      if (!article) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json(article);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid article data", details: error.errors });
      }
      res.status(500).json({ error: "Failed to update article" });
    }
  });

  app.delete("/api/admin/articles/:id", async (req, res) => {
    try {
      const success = await storage.deleteArticle(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Article not found" });
      }
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete article" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
