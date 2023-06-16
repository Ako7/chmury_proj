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

app.get("/api/data/:col/:met", async (req, res) => {
  const col = req.params.col;
  const met = req.params.met;
    try {
      var data = await Data.find().sort();
      if(col==="def"&&met==="asc"){
        data = await Data.find().sort();
      }
      if(col==="yr"&&met==="asc"){
        data = await Data.aggregate([{$addFields: {yrNumber: { $toInt: "$year" }}},{$sort: { yrNumber: 1 } }]);
      }
      if(col==="yr"&&met==="desc"){
        data = await Data.aggregate([{$addFields: {yrNumber: { $toInt: "$year" }}},{$sort: { yrNumber: -1 } }]);
      }
      if(col==="pr"&&met==="asc"){
        data = await Data.aggregate([{$addFields: {priceNumber: { $toInt: "$price" }}},{$sort: { priceNumber: 1 } }]);
      }
      if(col==="pr"&&met==="desc"){
        data = await Data.aggregate([{$addFields: {priceNumber: { $toInt: "$price" }}},{$sort: { priceNumber: -1 } }]);
      }
      if(col==="md"&&met==="asc"){
        data = await Data.find().sort({model:'asc'});
      }
      if(col==="ct"&&met==="asc"){
        data = await Data.find().sort({city:'asc'});
      }
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  });
app.get("/api/sort", async (req, res) => {
    try {
      const data = await Data.find().sort({year:'asc'});
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
      await Data.findByIdAndDelete(recordId);
      res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to delete record" });
  }
});

app.post('/api/updateData', (req, res) => {
  const formData = req.body;
  const dataId = formData.id;

  Data.findByIdAndUpdate(dataId, formData)
    .exec()
    .then(() => {
      res.send('Dane zaktualizowane');
    })
    .catch((error) => {
      console.error('Błąd aktualizacji danych w bazie:', error);
      res.status(500).send('Błąd serwera');
    });
});

app.post('/api/addData', (req, res) => {
  const formData = req.body;

  Data.create(formData)
    .then((createdData) => {
      res.json(createdData);
    })
    .catch((error) => {
      console.error('Błąd dodawania danych:', error);
      res.status(500).json({ error: 'Błąd serwera' });
    });
});
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Nasłuchiwanie na porcie ${port}`))
