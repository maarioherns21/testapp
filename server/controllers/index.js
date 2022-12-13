import mySchema from "../model/movies.js"


// index form movies
const index = async (req, res) => {
  const movies = mySchema.Movie;

  try {
    const fetchMovies = await movies.find();

    res.status(200).json(fetchMovies);
  } catch (error) {
    console.log(error.message);

    res.status(400).json({ message: error.message });
  }
};


//this creates a movie a user 
const createMovie = async (req, res) => {
  const movie =  req.body

  const newMovie = new mySchema.Movie({ ...movie, user : req.userId, createdAt: new Date().toISOString() });
  
  console.log(newMovie)
  try {
    const saveMovie = await newMovie.save();

    res.status(200).json(saveMovie);
  } catch (error) {
    console.log(error.message);

    res.status(401).json({ message: error.message });
  }
};

//this only creates the movie without a user
// const createMovie2  = async (req, res) => {
//   const { name, body, creator, images, video } =  req.body
 
//    const newMovie = new mySchema.Movie({ name, body, creator, images, video } );
//    console.log(newMovie)
//    try {
//      const saveMovie = await newMovie.save();
 
//      res.status(200).json(saveMovie);
//    } catch (error) {
//      console.log(error.message);
 
//      res.status(401).json({ message: error.message });
//    }
//  };


const updateMovie = async (req, res) => {
  const { name, body, creator, images, video } = req.body;
  const { id } = req.params;
  const updateMovie = { name, body, creator, images, video, _id: id };

  const newMovie = await mySchema.Movie.findByIdAndUpdate(id, updateMovie, { new: true });
  try {
    const saveMovie = await newMovie.save();

    res.status(200).json(saveMovie);
  } catch (error) {
    console.log(error.message);

    res.status(404).json({ message: error.message });
  }
};



const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMovie = await mySchema.Movie.findByIdAndDelete(id);

    res.status(200).json(deleteMovie);
  } catch (error) {
    console.log(error.message);

    res.status(401).json({ message: error.message });
  }
};


const CTRL =  {"index": index , "createMovie": createMovie, "updateMovie": updateMovie, "deleteMovie": deleteMovie}

export default CTRL







































// import mySchema from "../model/movies.js";



// const index = async (req, res) => {
//   const movies = mySchema.Movie;
//   try {
//     const allMovies = await movies.find();

//     res.status(200).json(allMovies);
//   } catch (error) {
//     console.log(error.message);

//     res.status(400).json({ message: error.message });
//   }
// };


// const createMovie = async (req, res) => {
//   const {name , body, creator, images} = req.body

//   const newMovie = mySchema.Movie( {name , body, creator, images})
//     try {
//     const saveMovie = newMovie.save()

//     res.status(200).json(saveMovie)

//   } catch (error) {
//     console.log(error.message);

//     res.status(400).json({ message: error.message });
//   }
// };


// const updateMovie = async (req, res) => {
//   const { name, body, creator, images } = req.body;
//   const { id } = req.params;

//   try {
//     const updateMovie = { name, body, creator, images, _id: id };

//     const newMovie = await mySchema.Movie.findByIdAndUpdate(id, updateMovie, { new: true });

//     res.status(200).json(newMovie);
//   } catch (error) {
//     console.log(error.message);

//     res.json({ message: error.message });
//   }
// };


// const deleteMovie = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deleteMovie = await mySchema.Movie.findByIdAndRemove(id);

//     res.status(200).json(deleteMovie);
//   } catch (error) {
//     console.log(error.message);

//     res.status(404).json({ message: error.message });
//   }
// };


// const CTRL =  { "index": index ,  "createMovie": createMovie, "updateMovie": updateMovie, "deleteMovie": deleteMovie}


// export default CTRL