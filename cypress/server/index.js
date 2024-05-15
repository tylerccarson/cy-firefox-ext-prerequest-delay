import express from "express";

const app = express();

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
