import ContactMessage from "../models/ContactMessage.js";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createContactMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!emailPattern.test(email)) {
      return res.status(400).json({ message: "Enter a valid email address." });
    }

    const savedMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      message: "Message received successfully.",
      id: savedMessage._id,
    });
  } catch (error) {
    next(error);
  }
};

export const listContactMessages = async (req, res, next) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 }).limit(100);
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
