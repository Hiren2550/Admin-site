import { User } from "../model/user.model.js";

export const fetchAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const fetchUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    const { password: pass, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(400).json(error);
  }
};
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ result: "User is deleted" });
  } catch (error) {
    res.status(400).json(error);
  }
};
