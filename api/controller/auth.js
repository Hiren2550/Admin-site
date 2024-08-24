import { User } from "../model/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    const user = new User({ name, email, role, password });
    const data = await user.save();
    const { password: pass, ...rest } = data._doc;
    res.status(201).json(rest);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(400).json({ message: "No such user" });
    } else if (user.password === password) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Wrong Crendentials" });
    }
  } catch (error) {
    next(error);
  }
};
