import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import cors from "cors";

const app = express();
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error occured while connecting to mongoDB", error);
}

//defining routes
app.use("/book",bookRoute)
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
