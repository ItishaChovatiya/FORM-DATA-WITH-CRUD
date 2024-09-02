const express = require("express")
const { user_Controller } = require("../../controller")

const user_R = express.Router()

user_R.post("/user-end",user_Controller.post_user)

user_R.get("/get_user-end",user_Controller.get_user)

user_R.put("/user-end/:id",user_Controller.update_user)

user_R.delete("/user-end/:id",user_Controller.delete_user)
    




module.exports = user_R