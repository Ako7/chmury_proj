const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
    mark: { type: String, required: true },
    model: { type: String, required: true },
    generation_name: { type: String, required: true },
    year: { type: String, required: true },
    mileage: { type: String, required: true },
    vol_engine: { type: String, required: true },
    fuel: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    price: { type: String, required: true },
})

mongoose.model("Data", dataSchema);

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to database successfully")
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    }
}