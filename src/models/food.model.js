import mongoose from "mongoose";

const foodSchema= new mongoose.Schema({
    name: {type: String, 
        required: true},

    video:{ type: String,
         required: false},

    description:{ type: String, 
        required: true},
        
    foodPartner:{ type: mongoose.Schema.Types.ObjectId, 
        ref: 'foodPartner', required: true },
});

const foodModel = mongoose.model("food", foodSchema);
export default foodModel;