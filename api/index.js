import express from "express";

import { client } from "./db.js";

const app = express();

const data = ["Tri Wulandari", "D3 Manajemen informatika"];
app.use(express.static("public"));

app.get("/api/planet", async (_req, res) => {
  const results = await client.query("SELECT * FROM planet");
  res.send(results.rows);
});

app.get("/api/data", async (req, res) => {
  console.log(`data mahasiswa ${data}`);
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server berhasil berjalan.");
});
