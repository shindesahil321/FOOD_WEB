import mongoose from "mongoose";

 export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sahilshinde:fnHI62gKdMYYRh7X@cluster0.5weze.mongodb.net/food-del')
     .then(()=>console.log("DB connected"));
    
}