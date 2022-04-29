import { MongoClient } from "mongodb";
import "dotenv/config";

//Connection URL

const url = process.env.DB_URL;
const client = new MongoClient(url);

//Database DB_NAME

const dbName = process.env.DB_NAME;

const connection = async() => {
    try {
        //Use connection method to connection to the MongoDB server
        await client.connect();
        console.log("Connected successfully to MongoDB");
        const db = client.db(dbName);
        const collection = db.collection('documents');

        const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        console.log('Inserted documents successfully =>', insertResult);
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
    } finally {
        client.close();
    }
}

export default connection;