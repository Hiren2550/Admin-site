import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productsRouter from "./routes/product.route.js";
import brandsRouter from "./routes/brand.route.js";
import categoriesRouter from "./routes/category.route.js";
import usersRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cartRouter from "./routes/cart.route.js";
import ordersRouter from "./routes/order.route.js";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";
dotenv.config();

const app = express();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/products", productsRouter);
app.use("/api/brands", brandsRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", ordersRouter);

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected");
};
main().catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.json({ message: "API done" });
});

app.post("/mail", async (req, res) => {
  const to = req.body.email;
  const resetPage = "https://www.google.com/";
  const subject = "reset password for Ecommerce website user";
  const html = `<P>Click<a href='${resetPage}'>here</a>to Reset your password</p>`;
  const text = "This is reset password action";
  const info = await transporter.sendMail({
    from: '"Ecommerce Website" <dummyhiren090@gmail.com>', // sender address
    to,
    subject,
    html,
    text,
  });
  res.json(info);
});
app.use((err, req, res, next) => {
  const statuscode = err.statuscode || 500;
  const message = err.message || "internal Server Error";
  return res.status(statuscode).json({ success: false, statuscode, message });
});

app.listen(8000, () => {
  console.log("server started");
});
