import mongoose from "mongoose";

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("data base connected sucessfully");
    })
    .catch((error)=>{
        console.log("Connection Error",error);
    })
}

export default connectDB;