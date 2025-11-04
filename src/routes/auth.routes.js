import express from 'express';
const router = express.Router();
import { registerUser, loginUser, logout } from '../controllers/auth.controller.js';
import { foodPartnerRegister, loginFoodPartner } from '../controllers/auth.controller.js';


// user routes api 
router.post("/user/register", registerUser);
router.post("/user/login", loginUser);
router.get("/user/logout", logout);


//food partner routes api

router.post("/foodPartner/register", foodPartnerRegister);
router.post("/foodPartner/login", loginFoodPartner);
router.get("/foodPartner/logout", logout);


export default router; 