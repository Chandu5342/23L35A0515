import express from "express";
import { createShortUrl, redirectUrl, getStats } from "./Contollers.js";

const router = express.Router();

// create  short url
router.post("/shorturls", createShortUrl);

// stats  a shortcode
router.get("/shorturls/:shortcode", getStats);

// redirect 
router.get("/:shortcode", redirectUrl);

export default router;
