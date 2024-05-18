import mongoose from "mongoose";


const subcatschema = new mongoose.Schema({
    category:String,
    subcategory:String
});

const subcategory = new mongoose.model("subcategory",subcatschema);

export default subcategory;
