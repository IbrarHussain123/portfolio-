// backend/routes/messageRoutes.js
import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// POST /api/messages
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/messages (optional admin route)
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
