import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express(); // Changed 'let' to 'const'

app.use(express.json({ limit: "10mb" }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());

// --- Routes Import ---
import userRoutes from "./routes/user.routes.js";
import facultyRoutes from "./routes/faculty.routes.js"; 
import adminRoutes from "./routes/admin.routes.js";

// --- Routes Declaration ---
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/faculty", facultyRoutes);
app.use("/api/v1/admin", adminRoutes);

// Example URL: https://localhost:5000/api/v1/faculty/register

export { app };