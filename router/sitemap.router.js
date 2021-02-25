const express = require("express");
const route = express.Router();
const sitemap = require("../controller/sitemap.controller");

route.get("/", sitemap.getsitemap);

module.exports = route;