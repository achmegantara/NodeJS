/* eslint-disable no-undef */
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name tidak ada, please isi ya']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Data name tidak ada, please isi ya']
    },
    age: {
        type: Number,
    },
    favoriteFruit: fruitSchema
});

const People = mongoose.model("People", peopleSchema);

const fruitDuku = new Fruit({
    name : "Duku",
    rating: 8,
    review: "rasanya manis"
});

fruitDuku.save(function(error){
    if(error){
        console.log(error)
    } else {
        console.log("berhasil simpan buah duku kedalam database")
    }
})

const ega = new People({
    name: "ega",
    age: 24,
    favoriteFruit: fruitDuku
})

ega.save(function(error){
    if(error){
        console.log(error);
    } else {
        console.log("data ega berhasil ditambahkan");
    }
})