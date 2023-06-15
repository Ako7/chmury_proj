const mongoose = require("mongoose")
module.exports = async () => {
    const Data = mongoose.model("Data");
    const result = await Data.deleteMany({});
    console.log("Removed", result.deletedCount, "records");

    const recordsToAdd = [
        { mark: "opel", model: "combo", generation_name: "gen-d-2011", year: "2015", mileage: "139568", vol_engine: "1248", fuel: "Diesel", city: "Janki", province: "Mazowieckie", price: "35900" },
        { mark: "ford", model: "focus", generation_name: "gen-e-2015", year: "2018", mileage: "50000", vol_engine: "1596", fuel: "Petrol", city: "Warsaw", province: "Mazowieckie", price: "45000" },
        { mark: "opel", model: "combo", generation_name: "gen-d-2011", year: "2015", mileage: "139568", vol_engine: "1248", fuel: "Diesel", city: "Janki", province: "Mazowieckie", price: "35900" },
        { mark: "ford", model: "focus", generation_name: "gen-e-2015", year: "2018", mileage: "50000", vol_engine: "1596", fuel: "Petrol", city: "Warsaw", province: "Mazowieckie", price: "45000" },
      ];
    
    for (const recordData of recordsToAdd) {
        const newRecord = new Data(recordData);
        await newRecord.save();
    //console.log("Added?")
}
}