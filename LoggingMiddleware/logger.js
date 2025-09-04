import axios from "axios";
import dotenv from 'dotenv'
dotenv.config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export const Log = async (stack, level, pkg, message) => {
  try {
    const body = {
      stack,      // "backend" or "frontend"
      level,      // "info", "error", etc.
      package: pkg, // "db", "handler", etc.
      message,   // your log message
    };

    const res = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      body,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,  
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log sent:", res.data);
  } catch (err) {
    console.error("Log failed:", err.response?.data || err.message);
  }
};
