import mongoose from "mongoose";


const catschema = new mongoose.Schema({
    category:String
});

const category = new mongoose.model("category",catschema);

export default category;
