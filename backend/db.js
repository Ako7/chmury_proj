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
        //const user = { firstName: "John", lastName: "John", email: "tom1@tom.pl", password: "$2b$10$940vnExeWr3u74df1MmMRe3pbX39LAoNwG1tKoBcDtpUT3ZIjqr0a" };
        //mongoose.model("User").create(user);
        //console.log("Created user?")
        const Data = mongoose.model("Data");
        const newData = new Data({ mark: "opel", model: "combo", generation_name: "gen-d-2011", year: "2015", mileage: "139568", vol_engine: "1248", fuel: "Diesel", city: "Janki", province: "Mazowieckie", price: "35900" });
        newData.save();
        //console.log("Added?")
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!")
    }
}