const http = require('http')
require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(express.json())
app.use(cors())
const connection1 = require('./db')
connection1()

app.listen(3000, () => console.log('Serwer działa!'))