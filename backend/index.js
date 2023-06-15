require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const app = express()
const cors = require('cors')
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const dbImport = require("./dbimportdata")

//middleware
app.use(express.json())
app.use(cors())
const connection = require('./db')
connection()


const Data = mongoose.model("Data");
const User = mongoose.model("User");

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
dbImport()

app.get("/api/data", async (req, res) => {
    try {
      const data = await Data.find();
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  });

app.get("/api/data_us", async (req, res) => {
    try {
      const data_us = await User.find();
      res.send("ok", data_us);
    } catch (error) {
      console.log(error);
      
    }
  });
app.delete("/api/data/:recordId", async (req, res) => {
const recordId = req.params.recordId;

try {
    // Tutaj możesz wykonać operacje usunięcia rekordu z bazy danych
    // na podstawie przekazanego recordId

    // Przykład usunięcia rekordu z bazy danych przy użyciu Mongoose
    await Data.findByIdAndDelete(recordId);

    res.status(200).json({ message: "Record deleted successfully" });
} catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete record" });
}
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
