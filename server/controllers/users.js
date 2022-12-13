import mySchema from "../model/movies.js";
import myUserSchema from "../model/user.js"


// fetching the users
const fetchUser = async (req, res) => {
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
const login = async (req, res) => {
  const users = myUserSchema.User;
  try {

    const user = await users.findOne({ email: req.body.email });
    console.log(user);

    if (!user) return res.status(401).json({ err: "bad credentials" });

    res.json(user);
  } catch (err) {
    return res.status(401).json(err);
  }
};

// sign up page

const signup = async (req, res) => {
  const {username, email,  password,  bio,  photoUrl } = req.body;

  const newUser = new myUserSchema.User({ username, email,  password,  bio,  photoUrl });
  try {
    const saveUser = await newUser.save();

    res.status(200).json(saveUser);
  } catch (error) {
    console.log(error.message);

    res.json({ message: error.message });
  }
};

//for the profile

const profile = async (req, res) => {
  const users = myUserSchema.User;
  const movies = mySchema.Movie;
  try {
    const user = await users.findOne({ username: req.params.username });

    if (!user) return res.status(404).json({ err: "user not found" });

    const userMovies = await movies.find({ user: user._id }).populate("user").exec();

    res.status(200).json({ userMovies: userMovies, user: user });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ message: error.message });
  }
};


const deleteUser = async (req, res) => {
   const {id} = req.params
    try {
      const deleteUser = await myUserSchema.User.findByIdAndDelete(id)


      res.status(200).json(deleteUser)
        
    } catch (error) {
        console.log(error.message)

        res.json({message: error.message})
    }
}


const UCTRL = { "login": login, "signup": signup , "profile" : profile, "deleteUser": deleteUser, "fetchUser": fetchUser}

export default UCTRL


































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