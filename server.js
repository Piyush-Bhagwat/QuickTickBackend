const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./src/database/db.connect");
const { router: userRouter } = require("./src/routes/route.user");

app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

//Main Routes
app.get("/", (req, res) => {
    res.send("QuickTick Backend");
});

app.use("/user", userRouter);

//starting servers
const ignite = async () => {
    await connectToDB();
    app.listen(4100, () => {
        console.log("-> 🏃 Server Running");
    });
};

ignite();
