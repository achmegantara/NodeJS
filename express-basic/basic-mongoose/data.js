/* eslint-disable no-undef */
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/db-mongoose', { useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const apple = new Fruit({
//     name : "Apple",
//     rating: 8,
//     review: "rasanya manis"
// });

// apple.save(function(error){
//     if(error){
//         console.log(error)
//     } else {
//         console.log("berhasil simpan buah apel kedalam database")
//     }
// })

const pisang = new Fruit({
    name : "pisang",
    rating: 10,
    review: "warnanya kuning"
});

const jeruk = new Fruit({
    name : "jeruk",
    rating: 15,
    review: "warnanya oren"
});

const durian = new Fruit({
    name : "durian",
    rating: 5,
    review: "durinya banyak"
});

Fruit.insertMany([pisang, jeruk, durian], function(error){
    if(error){
        console.log(error)
    } else {
        mongoose.connection.close();
        console.log("berhasil simpan buah apel kedalam database")
    }
});
