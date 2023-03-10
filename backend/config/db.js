const mongoose = require("mongoose");
const { db } = require("../models/User");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const database = process.env.DATABASE;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.mt0wteb.mongodb.net/${database}?retryWrites=true&w=majority`);
        console.log("Conectou ao banco");
        return dbConn;

    } catch (error) {
        console.log("Error: " + error);
    }
};

conn();

module.exports = conn;