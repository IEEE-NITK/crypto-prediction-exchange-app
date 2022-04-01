const mongoose = require("mongoose");
require("dotenv").config({ path: "config/dev.env" });
const User = require("../models/User");

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
});

// const user = new User({
//     name: "Chandan",
//     email: "chandankum2440@gmail.com",
//     password: "abcd9708771858",
// });

// user.save()
//     .then(() => {
//         console.log(user);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
