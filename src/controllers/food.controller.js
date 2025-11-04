import express from 'express';
const router = express.Router();

async function  createFoodItem(req, res) {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file) // multer adds 'file' to req
    res.send("Food item created");
}

export {createFoodItem};