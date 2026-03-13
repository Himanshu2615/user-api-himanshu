const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Define Routes
app.use("/api/users", require("./routes/users"));

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
