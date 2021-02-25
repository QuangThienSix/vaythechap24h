const express = require("express");
const route = express.Router();
const getLogin = require("../controller/getLogin.controller");

// const storage = multer.diskStorage({
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     },
//     destination(req, file, cb) {
//         cb(null, "./public/images/");
//     },
// });


// const upload = multer({ storage });



route.get("/", getLogin.loadlogin);
route.post("/", getLogin.postlogin);

module.exports = route;