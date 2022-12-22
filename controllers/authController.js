import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
  registerUser: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req.body;
      const userExists = await User.findOne({ email: email });
      if (userExists) {
        return res.status(406).send("User Already Exists!");
      } else {
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await new User({
          firstname,
          lastname,
          email,
          password: hashedPassword,
        });
        await newUser.save();
        return res.status(201).send("User Registration Successful!");
      }
    } catch (err) {
      return res
        .status(500)
        .send("User Registration Error. Please try again later!");
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.send("Invalid credentials!");
      }
      const isMatched = await bcrypt.compare(password, user.password);
      if (!isMatched) {
        return res.send("Invalid credentials!");
      }
      const payload = { username: email, _id: user._id };
      const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "5d",
      });

      return res.json({
        message: "login success",
        token: token,
        user: user,
      });
    } catch (err) {
      return res.send("Error from controller", err);
    }
  },
};

export default authController;
