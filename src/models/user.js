const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const User= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
      lowercase: true,
      required: true,
      unique: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address: " + value);
        }
      },
    },
    password:{
        type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new Error("Enter a Strong Password: " + value);
        }
      }
    },
    photoUrl: {
        type: String,
        default: "https://geographyandyou.com/images/user-profile.png",
        validate(value) {
          if (!validator.isURL(value)) {
            throw new Error("Invalid Photo URL: " + value);
          }
        },
    },
    bio:{
        type:String,
        default:" "
    }
});
User.methods.getJWT = async function () {

  
    const token = await jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
  
    return token;
  };
  
  User.methods.validatePassword = async function (passwordInputByUser) {
    const passwordHash = this.password;
  
    const isPasswordValid = await bcrypt.compare(
      passwordInputByUser,
      passwordHash
    );
  
    return isPasswordValid;
  };
  
  module.exports = mongoose.model("User", User);