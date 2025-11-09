import {User } from "../Models/User.js"
import jwt from 'jsonwebtoken'

export const Authenticate = async(req,res,next) => {
    const token = req.header("Auth")
    if (!token) return res.json({message: "login first"})
    try {
        const decode = jwt.verify(token, "!@#$%^&()");
        // const id = decode.userId;
        let user = await User.findById(decode.userId)
        console.log("this is decoded data:",decode)
        req.user = user
        if(!user) return res.json({message:"user not exist"})
        next()
    } catch (error) {
        res.json({message:error.message})
    }
}