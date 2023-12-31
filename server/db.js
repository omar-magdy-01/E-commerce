var mongoose = require("mongoose");
connectToDb = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("MongoDB connected successfully!");
        })
        .catch((error) => { console.error(error); });
 }


module.exports = connectToDb;
