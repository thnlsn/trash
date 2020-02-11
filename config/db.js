// this is the file that will connect mongo
const mongoose = require('mongoose');
require('dotenv').config();
// values in default.json are avaiable throughout the app (thanks to config), we are pulling mongoURI here with .get()
const db = process.env.mongoURI;

// mongoose returns a promise so we wait for the connection
const connectDB = async () => {
    try {
        // connect our app to mongo database with the uri we got with config, then pass in some setting options
        await mongoose.connect(db, {
            // some settings
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('▓▓▓▓▓ MongoDB Connected ▓▓▓▓▓');
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

// export the function
module.exports = connectDB;
