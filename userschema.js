import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    category:String,
    subcategory:String,
    name:String,
    age:String},{timestamps:true});

const user = new mongoose.model("user",userschema);

export default user;
