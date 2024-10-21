const express = require("express");
const { register } = require("../controllers/cont.user");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("user routess");
});

router.post("/register", (req, res) => {
    console.log("-> registering user");

    const b = req.body;
    try {
        register(b);
        res.status(200).send("heeh");
    } catch (e) {
        console.log(e);
        res.status(400).send("error");
    }
});

module.exports = { router };
