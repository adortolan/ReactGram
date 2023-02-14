const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.set("strictQuery", true);

const userSchema = new Schema({
        name: String,
        email: String,
        password: String,
        profileImage: String,
        bio: String,
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;