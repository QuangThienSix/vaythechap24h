const writerModel = require("../model/writer.model");

module.exports.loadWriter = async function(req, res) {

    if (req.session.isAuthenticated === true) {
        res.render("writer");
    } else {
        res.redirect('/admin');
    }

    // res.render("Writer", {

    // });
};