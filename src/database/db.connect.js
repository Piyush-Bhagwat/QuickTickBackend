const mongoose = require('mongoose');
const uri = 'mongodb+srv://piyush:wkpQq8SHSZbvM363@cluster0.bxfreba.mongodb.net/QuickTick?retryWrites=true&w=majority';

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || uri);
        console.log("-> DB connected! 🤝");
    } catch (er) {
        console.log("-> Cant connect to DB", er);
    }
};

module.exports = {connectToDB}    