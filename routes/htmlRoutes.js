const router = require("express").Router();
const { response } = require("express");
const { request } = require("http");
const path = require("path")

router.get("/notes", (request, response) => {
response.sendFile(path.join(__dirname, '../public/notes.html'))
})

router.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'))
})




module.exports = router; 