
const express=require("express")
const routerActions = require("../controllers/signin-signup/index.js")
const validate=require("../middlewares/zod-validate/zodvalidate.js")
const signUpmodel = require("../models/signupZod.js")
const router = express.Router()
router.route("/").get(routerActions.Home)
router.route("/signin").post(routerActions.Login)
router.route("/signup").post(validate(signUpmodel),routerActions.signUp)

module.exports = router