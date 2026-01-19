import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();
const SECRET = "your_jwt_secret"; // keep this in env variable

// Mock DB (replace with MongoDB in real app)
let users = [];

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (users.find((u) => u.email === email))
    return res.status(400).json({ success: false, message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashed, role: "user" };
  users.push(newUser);

  res.json({ success: true, user: newUser });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(400).json({ success: false, message: "Invalid email" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ success: false, message: "Invalid password" });

  // JWT token
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1d" });
  res.json({ success: true, token, user });
});

// Middleware to verify JWT
export const verifyJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export default router;
