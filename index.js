import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'

dotenv.config()

import accountRoutes from "./src/routes/account.js";

const app = express();


app.use(bodyParser.json());

app.use("/account", accountRoutes); 

app.use("/", (req, res)=>{
  res.json({error: "page not found"});
}); 

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
