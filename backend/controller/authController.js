import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  //hash the password:
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({
      message: "user created successfully.",
    });
  } catch (error) {
    next(error);
  }
};

//req is a data we are getting from client side
//res is a data we send back to the clinet side
// and we use next for handling our middleware
export const signin = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const validUser = await User.findOne({ username }); //you can also write this {email: email}

    //  if(!validUser) return res.status(401).json({message: "Invalid email"})
    if (!validUser) return next(errorHandler(404, "user not  found"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentials"));

    const token = jwt.sign({ id: validUser._id }, process.env.MY_SECRET_KEY);

    // for removing password becouse we want to show password on clinet side
    const { password: hashedPassword, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
