import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URI!)
        console.log("connected successfully")
    } catch (error) {
        console.log(error)
    }
}