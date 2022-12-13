import mongoose from "mongoose";
const Schema =  mongoose.Schema



const movieSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  body: String,
  creator: String,
  images: String,
  video: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Movie = mongoose.model("movie", movieSchema,"movie")

const mySchema = { "Movie" : Movie}

export default mySchema