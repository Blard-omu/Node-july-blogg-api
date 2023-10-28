import express  from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan from "morgan";
import blogRouter from "./src/routes/blogRoutes.js";
import authRouter from "./src/routes/authRoutes.js";
import userRouter from "./src/routes/userRoutes.js";
import swaggerUi from "swagger-ui-express"
import {swaggerSpec} from "./src/swaggerConfig.js"
import { apiDocumentation } from "./src/routes/docs/api-docs.js";

const app = express();
dotenv.config();


// middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// userRoutes localhost:8080
app.use('/', userRouter); 
app.use('/', authRouter); 
app.use('/', blogRouter);


  // Serve Swagger UI at /api-docs
  app.use('/', swaggerUi.serve, swaggerUi.setup(apiDocumentation));



const port = process.env.PORT || 3000;
const dbURL = process.env.MONGO_URI;
console.log(dbURL);

// connect db
const connect = (url)=>{
    mongoose.connect(url)
    .then(() => console.log("DB Connected suceesfully!"))
    .catch((err)=>{
      console.log("Error connecting to DB", err.message);
    })
}
connect(dbURL)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});