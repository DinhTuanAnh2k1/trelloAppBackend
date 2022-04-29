import express from "express";
import "dotenv/config";
import connection from './config/connectDB';

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("hello world with node.js!");
})

// connection();

app.listen(port, () => {
    console.log("Node.js server is running on the port: " + port);
});