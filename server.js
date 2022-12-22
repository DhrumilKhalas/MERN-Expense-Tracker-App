import express from "express";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import cors from "cors";
import transactionRouter from "./routes/TransactionRoute.js";
import authRouter from "./routes/AuthRoute.js";
import connection from "./config/connection.js";
import userRouter from "./routes/UserRoute.js";
import passport from "passport";
import passportConfig from "./config/passport.js";
import path from "path"
import { fileURLToPath } from 'url';

const app = express();

app.use(express.json());
app.use(cors());
app.use(passport.initialize());
passportConfig(passport);

app.use("/transaction", transactionRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);

// serving the frontend
const __filename = fileURLToPath(import.meta.url);
app.use(express.static(path.join(__filename, "../frontend/build")))

app.get("*", function(_,res) {
    res.sendFile(
        path.join(__filename, "../frontend/build/index.html"),
        function(err){
            res.status(500).send(err)
        }
    )
})

app.get("/", (req, res) => {
  res.send("Hello from the server side!");
});

connection();

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
