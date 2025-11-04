import express from 'express';
const router=express.Router();
import  {createFoodItem} from '../controllers/food.controller.js'
import {authFoodPartnerMiddleWare} from '../middlewares/auth.middleware.js'
import multer from 'multer';
const upload= multer({
    storage:multer.memoryStorage(),
});


router.post('/',authFoodPartnerMiddleWare,upload.single("video"),createFoodItem);





export default router;