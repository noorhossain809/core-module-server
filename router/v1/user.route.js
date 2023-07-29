const express = require("express");
const router = express.Router();

const userRoute = require("../../controller/user.controller");
const { limiter } = require("../../middlewere/limiter");


router.route("/")
.get(userRoute.getAllUsers)
.post(userRoute.addAUser)

router.route("/:id")
.get(limiter, userRoute.getAUser)
.patch(userRoute.updateUser)
.delete(userRoute.deleteUser)

module.exports = router;