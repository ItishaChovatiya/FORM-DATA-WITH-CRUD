const express = require("express")
const user_R = require("./user_router")


const router = express.Router()

router.use("/user-linking",user_R)

module.exports = router
