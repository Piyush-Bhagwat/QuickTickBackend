const { userModel } = require("../models/model.user");

const register = async (user) => {
    try{
        await userModel.insertMany(user);
        console.log("-> User Registered: ", user);
    } catch (er) {
        console.log(er)
    }
}

module.exports = {register}