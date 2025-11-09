import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/RecipeMaker")
const userSchema = new mongoose.Schema({
    name: {type: String, require:true},
    gmail: {type: String, require:true},
    password: {type: String, require:true},
})
export const User = mongoose.model("user", userSchema)