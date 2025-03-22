const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// Default route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Choose a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
