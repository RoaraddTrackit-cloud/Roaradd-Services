import type { Express } from "express";
import { type Server } from "http";
import { exec } from "child_process";
import { promisify } from "util";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

const execAsync = promisify(exec);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/deploy-webhook", async (req, res) => {
    const deploySecret = process.env.DEPLOY_SECRET;

    if (!deploySecret) {
      return res.status(500).json({ message: "DEPLOY_SECRET not configured on server" });
    }

    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== `Bearer ${deploySecret}`) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.json({ success: true, message: "Deploy triggered" });

    try {
      console.log("[deploy-webhook] Pulling latest code...");
      await execAsync("git pull origin main");
      console.log("[deploy-webhook] Rebuilding app...");
      await execAsync("npm run build");
      console.log("[deploy-webhook] Build complete. Restarting...");
      process.exit(0);
    } catch (err) {
      console.error("[deploy-webhook] Deploy failed:", err);
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      
      if (!parsed.success) {
        return res.status(400).json({ 
          message: "Invalid request data",
          errors: parsed.error.errors 
        });
      }

      const message = await storage.createContactMessage(parsed.data);
      return res.status(201).json({ 
        success: true, 
        message: "Message received successfully",
        id: message.id 
      });
    } catch (error) {
      console.error("Error creating contact message:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}