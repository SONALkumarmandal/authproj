const { Usermodel } = require("../../models");
const bcrypt=require("bcryptjs")
const Home = async function (req, res) {
  try {
    res.status(200).send("hi");
  } catch (error) {
    console.log(error);
  }
};

const signUp = async function (req, res) {
  try {
    const {username, email, password, phone } = req.body;
    if (!email || !password || !phone) {
      return res.status(400).json({ msg: "please enter all credentials" });
    }
    const UserExist = await Usermodel.findOne({ email });
    if (UserExist) {
      return res.status(400).json({ msg: "user already exist" });
    }
    const createdUser = {username, email, password, phone };
    console.log(createdUser);
    await Usermodel.create(createdUser);
    res.status(201).json({msg:"user created"})
  } catch (error) {
    console.log("Signup error", error);
  }
};

const Login = async function (req, res) {
  try {
    const { email, password } = req.body;
    const getEmail = await Usermodel.findOne({ email });
    if (!getEmail) {
      return res.status(401).send("enter credentials correctly");
    }
    const userValidation=await bcrypt.compare(password,getEmail.password)
    if(userValidation){
      res.status(200).json({
        msg:"login success!",
        token:await getEmail.generateToken(),
      })
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({ msg: "error occured" });
  }
};

module.exports = { Home, Login, signUp};
