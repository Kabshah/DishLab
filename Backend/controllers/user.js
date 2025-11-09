import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../Models/User.js';

export const register = async(req,res) => {
    const {name, gmail, password} = req.body;
    try {
        let user = await User.findOne({gmail})
        if(user) return res.json({message:"User already exists"});
        const hashPass = await bcrypt.hash(password,10)
        
        console.log(hashPass)
        user = await User.create({name,gmail,password:hashPass})
        res.json({message: "user register sucessfully..!",user})
    } catch (error) {
        res.json({message:error.message})
    }
    console.log(req.body)
}
// compare toh sirf login prr heee hota hai.
export const login = async (req,res) => {
    const {gmail, password} = req.body;
    try {
        let user = await User.findOne({gmail})
        if(!user) return res.json({message:"User doesn't exist"});

        const validPass = await bcrypt.compare(password,user.password)
        if (!validPass) return res.json({message:"Invalid credentials"});
        
        // token ma jb sign krty toh usko utha krr jwt io k pass ley jaa skty hein
        // yhn sirf _id (db sy jaa krr deklena kya hoti h wohi lagai h) mostly wohi lgti h
        const token = jwt.sign({userId:user._id}, "!@#$%^&()", {
            expiresIn: '1d'})
        res.json({message:`Welcome ${user.name}`,token})
    } catch (error) {
        res.json({message:error.message})
    }
}
export const  profile = async(req,res) => {
    res.json({user:req.user})
}