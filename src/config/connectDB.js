import { MongoClient } from "mongodb";
import "dotenv/config";

//Connection URL

const url = process.env.DB_URL;
const client = new MongoClient(url);

//Database DB_NAME

const dbName = process.env.DB_NAME;

let db;

const connectDB = async() => {
    try {
        //Use connection method to connection to the MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB");
        db = client.db(dbName);
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
    } finally {
        // client.close();
    }
}

const getDB = () => {
    return db;
}

module.exports = { connectDB, getDB };