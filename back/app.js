require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require('./config/db');

const app = express();

dbConnection(app);

app.use(cors());

app.use(express.json())