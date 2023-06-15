const mongoose = require("mongoose")
module.exports = async () => {
    const Data = mongoose.model("Data");
    const result = await Data.deleteMany({});
    //console.log("Removed", result.deletedCount, "records");

    const recordsToAdd = [
        {mark:"opel",model:"combo",generation_name:"gen-d-2011",year:"2015",mileage:"195000",vol_engine:"1248",fuel:"Diesel",city:"Jas�o",province:"Podkarpackie",price:"20999"},
        {mark:"opel",model:"combo",generation_name:"gen-d-2011",year:"2015",mileage:"135000",vol_engine:"1248",fuel:"Diesel",city:"Krak�w",province:"Ma�opolskie",price:"39000"},
        {mark:"opel",model:"combo",generation_name:"gen-d-2011",year:"2018",mileage:"135403",vol_engine:"1499",fuel:"Diesel",city:"Piaseczno",province:"Mazowieckie",price:"62000"},
        {mark:"opel",model:"combo",generation_name:"gen-d-2011",year:"2018",mileage:"117320",vol_engine:"1598",fuel:"Diesel",city:"Tarnowskie G�ry",province:"�l�skie",price:"53874"},
        {mark:"opel",model:"combo",generation_name:"gen-d-2011",year:"2016",mileage:"133700",vol_engine:"1598",fuel:"Diesel",city:"Str�a",province:"Ma�opolskie",price:"38900"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2007",mileage:"173000",vol_engine:"2792",fuel:"Gasoline",city:"Pozna�",province:"Wielkopolskie",price:"28500"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2002",mileage:"173000",vol_engine:"1796",fuel:"Gasoline",city:"Mys�owice",province:"�l�skie",price:"6900"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2002",mileage:"109900",vol_engine:"1796",fuel:"Gasoline",city:"Mogilno",province:"Kujawsko-pomorskie",price:"8999"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2002",mileage:"152700",vol_engine:"1796",fuel:"Gasoline",city:"�ywocice",province:"Opolskie",price:"7999"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2002",mileage:"220000",vol_engine:"2198",fuel:"LPG",city:"Szczecin",province:"Zachodniopomorskie",price:"4500"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2006",mileage:"400000",vol_engine:"1910",fuel:"Diesel",city:"Grodzisk Mazowiecki",province:"Mazowieckie",price:"11000"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2006",mileage:"191000",vol_engine:"1796",fuel:"Gasoline",city:"P�o�sk",province:"Mazowieckie",price:"13900"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2008",mileage:"283340",vol_engine:"1910",fuel:"Diesel",city:"Bia�ystok",province:"Podlaskie",price:"10500"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2005",mileage:"174000",vol_engine:"3000",fuel:"Diesel",city:"Sade Budy",province:"Mazowieckie",price:"7200"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2008",mileage:"223000",vol_engine:"1910",fuel:"Diesel",city:"Witkowo",province:"Wielkopolskie",price:"16950"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2003",mileage:"281185",vol_engine:"1796",fuel:"LPG",city:"Pozna�",province:"Wielkopolskie",price:"13000"},
        {mark:"opel",model:"vectra",generation_name:"gen-c-2002-2008",year:"2008",mileage:"320000",vol_engine:"1910",fuel:"Diesel",city:"Stargard Szczeci�ski",province:"Zachodniopomorskie",price:"8900"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2013",mileage:"79000",vol_engine:"1200",fuel:"Gasoline",city:"Sade Budy",province:"Mazowieckie",price:"32500"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2018",mileage:"6100",vol_engine:"1398",fuel:"Gasoline",city:"Pozna�",province:"Wielkopolskie",price:"44280"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2014",mileage:"155000",vol_engine:"1229",fuel:"Gasoline",city:"Kutno",province:"��dzkie",price:"24950"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2021",mileage:"12111",vol_engine:"1100",fuel:"Diesel",city:"Radom",province:"Mazowieckie",price:"100000"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2017",mileage:"30946",vol_engine:"999",fuel:"Gasoline",city:"Inowroc�aw",province:"Kujawsko-pomorskie",price:"37900"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2014",mileage:"48000",vol_engine:"1229",fuel:"Gasoline",city:"�wiebodzin",province:"Lubuskie",price:"36999"},
        {mark:"opel",model:"adam",generation_name:"-",year:"2015",mileage:"57500",vol_engine:"1398",fuel:"Gasoline",city:"Krak�w",province:"Ma�opolskie",price:"34900"},

    ];
    
    for (const recordData of recordsToAdd) {
        const newRecord = new Data(recordData);
        await newRecord.save();
    }
}