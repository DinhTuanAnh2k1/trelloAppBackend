import express from "express";
import "dotenv/config";
import { connectDB, getDB } from './config/connectDB';
import { createNew } from './models/board.model';

const app = express();
const port = process.env.PORT || 8080;

connectDB()
    .then(() => {
        runApp();
    }).catch(err => {
        console.error(err);
    })


const runApp = () => {

    app.get("/", async(req, res) => {
        res.send("hello world with node.js!");
    })

    // connection();

    app.listen(port, () => {
        console.log("Node.js server is running on the port: " + port);
    });
}