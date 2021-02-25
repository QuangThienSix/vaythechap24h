const loginModel = require("../model/login.model");
const bcrypt = require("bcrypt");


module.exports.loadlogin = async function(req, res) {
    res.render("login", {});
};

module.exports.postlogin = async function(req, res) {
    const user = await loginModel.singleByUserName(req.body.username);
    // console.log(user);
    if (user === null) {
        // res.locals.error= 'Invalid username or password.'
        return res.render("login", {
            error: "Invalid username or password.",
        });
    }
    const rs = bcrypt.compareSync(req.body.password, user.Password);
    if (rs === false) {
        // res.locals.error= 'Invalid username or password.'
        return res.render("login", {
            error: "Invalid username or password.",
        });
    }
    delete user.Password;

    req.session.isAuthenticated = true;


    res.redirect("/writer");
};