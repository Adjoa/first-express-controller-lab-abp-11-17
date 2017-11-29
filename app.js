var express = require('express')
var app = express()

const SiteController = require('SiteController')

app.get("/", SiteController.Index)
app.get("/about", SiteController.About)
app.get("/index", SiteController.Index)


module.exports = app
