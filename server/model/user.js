import mongoose from "mongoose";
const Schema = mongoose.Schema


const userSchema = new Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
    photoUrl: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User  = mongoose.model("user", userSchema, "user" )


const myUserSchema = { "User" : User}

export default myUserSchema