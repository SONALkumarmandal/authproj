const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function () {
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user.password, salt);
    user.password = hashpass;
    console.log(hashpass);
  } catch (error) {
    console.log(error);
  }
});
userSchema.methods.comparePass = async function (password) {
  bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        email: this.email,
        phone: this.phone,
      },
      process.env.jwt_token,
      {
        expiresIn: "1d",
      }
    );
  } catch (error) {
    console.log(error)
  }
};
const Usermodel = new mongoose.model("signIn", userSchema);

module.exports = {
  Usermodel,
};
