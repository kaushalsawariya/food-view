import jwt from 'jsonwebtoken';
import foodPartnerModel from '../models/foodPartner.model.js';

async function authFoodPartnerMiddleWare(req, res, next) {
    const token = req.cookies?.token; // safe access
    if (!token) {
        return res.status(401).json({
            message: "Please login first"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const foodPartner = await foodPartnerModel.findOne({ email: decoded.email });
        if (!foodPartner) {
            return res.status(404).json({ message: "Food partner not found" });
        }

        req.foodPartner = foodPartner; // attach to req
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
}

export {authFoodPartnerMiddleWare};
