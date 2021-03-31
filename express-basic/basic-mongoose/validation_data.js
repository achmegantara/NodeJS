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

const apple = new Fruit({
    name : "Apple",
    rating: 11,
    review: "rasanya manis"
});

apple.save(function(error){
    if(error){
        mongoose.connection.close();
        console.log(error)
    } else {
        mongoose.connection.close();
        console.log("berhasil simpan buah apel kedalam database")
    }
})
