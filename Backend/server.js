import express from "express";
import bodyParser from 'express'
import mongoose from "mongoose";
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
const app = express();
const port = 2000;

app.use(bodyParser.json())
app.use(cors({
  origin:true,
  methods:["GET","PUT","POST","DELETE"],
  credentials:true
}))
// prefix end-pont banaya h
app.use('/api',userRouter)
app.use('/api',recipeRouter)

app.get("/api/logout",(req,res) => {
  res.redirect("/login")
})
// Proper connection handling with .then and .catch
mongoose.connect("mongodb://localhost:27017/RecipeMaker")
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => console.log(`SERVER IS RUNNING ON PORT ${port}`));