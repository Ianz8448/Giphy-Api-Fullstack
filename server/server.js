/*
    Create a simple server (node server) using express

    Endpoints:
    GET /search?q=searchTerm&l=limit
*/

import express from "express";
const app = express();

const port = 3000;

import config from "./config.js";
const apiKey = config.apiKey;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/search", async (req, res) => {
  const { q, l } = req.query;

  if (!q) {
    return res.status(400).json({ error: "Search term 'q' is required" });
  }

  const uri = createURI(q, l);

  const response = await fetch(uri);
  if (!response.ok) {
    return res.status(response.status).json({ error: "Giphy API error" });
  }

  const data = await response.json();
  res.json(data);
});

function createURI(search, searchQuantity) {
  const limit = Math.min(Math.max(1, Number(searchQuantity) || 5), 24);
  return `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(search)}&limit=${limit}&api_key=${apiKey}`;
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${3000}/`);
});
