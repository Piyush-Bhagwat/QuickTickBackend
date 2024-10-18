const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("user routess");
});

router.post("/register", (req, res) => {
    console.log("-> registering user");

    res.status(200).send("heeh");
});

module.exports = { router };
