import userModel from "../models/user.model.js";
import foodPartnerModel from "../models/foodPartner.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function registerUser(req, res) {
  try {
    const { fullname, email, password } = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });
    if (isUserAlreadyExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      fullname,
      password: hashedPassword,
      email
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: { fullname: user.fullname, email: user.email },
      token
    });

  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { email: user.email},
      process.env.JWT_SECRET,
  
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
    });

    // success response
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

function logout(req,res){
    try{
            res.clearCookie("token");
    res.status(200).json({
        message:"logout sucessfully "
    });
    }
    catch(error){
            console.error("Registration Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}

async function foodPartnerRegister(req, res) {
  try {
    const { fullname, email, password } = req.body;

    const isfoodPartnerAlreadyExist = await foodPartnerModel.findOne({ email });
    if (isfoodPartnerAlreadyExist) {
      return res.status(400).json({ message: "Food Partner already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await foodPartnerModel.create({
      fullname,
      password: hashedPassword,
      email
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "Food Partner registered successfully",
      user: { fullname: user.fullname, email: user.email },
      token
    });

  } catch (error) {
    console.error("Registration Error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function loginFoodPartner(req, res) {
  try {
    const { email, password } = req.body;
    const foodPartner = await foodPartnerModel.findOne({ email });

    if (!foodPartner) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, foodPartner.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { email: foodPartner.email},
      process.env.JWT_SECRET,
  
    );

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
    });

    // success response
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}



export  { registerUser, loginUser, logout , foodPartnerRegister, loginFoodPartner };
