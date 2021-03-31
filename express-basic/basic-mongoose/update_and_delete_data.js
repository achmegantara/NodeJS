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

// Fruit.updateOne({_id: "60633a96c762893a6858280c"}, {name: 'Nanas'}, function(error){
//     if(error){
//         console.log(error);
//     } else {
//         console.log('Berhasil update data jeruk menjadi nanas');
//     }
// });

Fruit.deleteOne({name:'pisang'}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("data berhasil dihapus");
    }
})

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else {
        mongoose.connection.close();
        fruits.forEach(function(fruits){
            console.log(fruits.name);
        })
    }
})