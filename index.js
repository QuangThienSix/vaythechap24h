const express = require('express');
const http = require("http");
const https = require('https')
const reload = require("reload");
const path = require("path");
const cors = require('cors');
const sass = require("node-sass-middleware");
const bodyParser = require("body-parser");
const fs = require('fs');
require("express-async-errors");
const session = require("express-session");



const port = process.env.PORT || 80;



const app = express();



app.set("trust proxy", 1); // trust first proxy
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {
            // secure: true
        },
    })
);


const HomePage = require("./router/home.router");
const WriterPage = require("./router/writer.route");
const AdminPage = require("./router/logion.router");
const APIPageCustome = require("./router/apiCustomer.router");
const SitePage = require("./router/sitemap.router");


app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'pug');

app.use(cors())
app.use("/", HomePage);
app.use("/api", APIPageCustome);
app.use("/admin", AdminPage);
app.use("/writer", WriterPage);
app.use("/sitemap.xml", SitePage);



// use dependencies library
app.use(
    "/bootstrap",
    express.static(`${__dirname}/node_modules/bootstrap/dist`)
);
app.use("/font", express.static(`${__dirname}/node_modules/font-awesome`));
app.use("/jquery", express.static(`${__dirname}/node_modules/jquery/dist`));
app.use("/owl", express.static(`${__dirname}/node_modules/owl.carousel/dist`));




// use sass-midleware
app.use(
    sass({
        src: __dirname + "/public", //where the sass files are
        dest: __dirname + "/public", //where css should go
        debug: true, // obvious
        outputStyle: "compressed",
    })
);



// use static file
app.use("/", express.static(path.join(__dirname, "public")));



// enable when using pro mode
app.use(function(req, res) {
    res.render("404");
});

// other error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).render("500");
});

var https_options = {
    key: fs.readFileSync("root/privatekey.key"),
    cert: fs.readFileSync("root/vaythechapnganhang24h_vn.crt"),
    ca: [
        fs.readFileSync('root/USERTrustRSAAAACA.crt'),
        fs.readFileSync('root/vaythechapnganhang24h_vn.crt'),
        fs.readFileSync('root/SectigoRSADomainValidationSecureServerCA.crt'),
        fs.readFileSync('root/AAACertificateServices.crt'),
    ]
};


var httpServer = http.createServer(app);
var httpsServer = https.createServer(https_options, app);





// httpsServer.listen(443, () => {
//     console.log(`App is running on port ${port}`);
// });



// httpServer.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });

var https_port = process.env.PORT_HTTPS || 443;
var http_port = process.env.PORT || 80;

https.createServer(https_options, app).listen(https_port, function() {
    console.log('Magic happens on port ' + https_port);
});

// Redirect from http port to https
http.createServer(function(req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'].replace(http_port, https_port) + req.url });
    console.log("http request, will go to >> ");
    console.log("https://" + req.headers['host'].replace(http_port, https_port) + req.url);
    res.end();
}).listen(http_port);
