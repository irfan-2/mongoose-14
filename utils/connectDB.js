import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

async function connectDB(){
    try {
        const db_uri = process.env.mongoDB_URI
        await mongoose.connect(db_uri)
        console.log("databse connected successfully");
        
    } catch (error) {
        console.log(error.message);
        
    }
}

connectDB()