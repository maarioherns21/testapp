import mySchema from "../model/movies.js";
import myUserSchema from "../model/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



// fetching the users
export const fetchUser = async (req, res) => {
  const users = myUserSchema.User;
  try {
    const user = await users.find();

    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};

///this is for login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await myUserSchema.User.findOne({ email });

    if (!user) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = bcrypt.compare(password, user.password);

    if (!isPasswordCorrect)
      return res.status(404).json({ message: "Invalid Credentials." });

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: user, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }
};

// sign up page
export const signup = async (req, res) => {
  try {
    const { username, email, password, bio, photoUrl } = req.body;

    const user = await myUserSchema.User.findOne({ email });

    if (user) return res.status(404).json({ message: "User does exist." });
    // if(password !== confirmPassword) return  res.status(400).json({ message: "Passwords don't match."})

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await myUserSchema.User.create({
      email,
      password: hashedPassword,
      username,
      bio,
      photoUrl,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.TOKEN_KEY,
      { expiresIn: "1m" }
    );

    //// the 200 means everyhting when well and we sending  created user which is the result of the creation
    res.status(200).json({ result, token });
  } catch (error) {
    //if we get an error error 500 will populate something when wrong
    res
      .status(500)
      .json({ message: "Something went wrong creating the profile!" });
  }
};

//for the profile

export const profile = async (req, res) => {
  const users = myUserSchema.User;
  const movies = mySchema.Movie;
  try {
    const user = await users.findOne({ username: req.params.username });

    if (!user) return res.status(404).json({ err: "user not found" });

    const userMovies = await movies
      .find({ user: user._id })
      .populate("user")
      .exec();

    res.status(200).json({ userMovies: userMovies, user: user });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await myUserSchema.User.findByIdAndDelete(id);

    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};

// import myUserSchema from "../model/user.js";

// const fetchUser = async (req, res) => {
//   const users = myUserSchema.User;

//   try {
//     const fetchUser = await users.find();

//     res.json(fetchUser);
//   } catch (error) {
//     console.log(error.message);

//     res.json({ message: error.message });
//   }
// };

// const createUser = async (req, res) => {
//   const { username, password } = req.body;

//   const newUser = new myUserSchema.User({ username, password });
//   try {
//     const saveUser = await newUser.save();

//     res.status(200).json(saveUser);
//   } catch (error) {
//     console.log(error.message);

//     res.json({ message: error.message });
//   }
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deleteUser = await myUserSchema.User.findByIdAndRemove(id);

//     res.status(200).json(deleteUser);
//   } catch (error) {
//     console.log(error.message);

//     res.status(401).json({ message: error.message });
//   }
// };

// const UCTRL = {"fetchUser": fetchUser, "createUser": createUser, "deleteUser": deleteUser}

// export default UCTRL
