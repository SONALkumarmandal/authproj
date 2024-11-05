require("dotenv").config();
const mongoose = require("mongoose");

const Dbconnect = async function () {
  const db = process.env.DB_URL;

  
  if (!db) {
    throw new Error("DB_URL is undefined. Please check your .env file.");
  }

  try {
   
    
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = { Dbconnect };
