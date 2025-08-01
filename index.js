import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//custom routes
import userRouter from "./routes/auth.routes";
import cookieParser from "cookie-parser";
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "test check",
  });
});

app.use("/api/v1/users", userRouter);
app.listen(port, () => {
  console.log(`Serving at port: ${port}`);
});
