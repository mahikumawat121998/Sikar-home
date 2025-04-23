import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();


app.use(session({
  secret: 'your-secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,          // ⚠️ Required for SameSite=None
    httpOnly: true,
    sameSite: 'none'
  }
}));
app.use(cors({ origin: ["http://localhost:5173","http://54.252.163.13:5173"], credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
