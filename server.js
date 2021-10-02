const express = require("express");
const mongoose = require("mongoose");
const { modelName } = require("./models/person");
const Person = require("./models/person");

require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGODB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.once("open", () => {
    console.log("Connected to database!");
})

// const yacine = new Person({
//     name: "Yacine",
//     age: 25,
//     favoriteFood: ["pizza", "tchika massala"]
// })
// yacine.save((error, document) => {
//     if (error) console.error(error);
//     console.log(document);
// })

// const arrayOfPersons = [
//     {
//         name: "Samah",
//         age: 24,
//         favoriteFood: ["pizza", "coffee with milk"]
//     },
//     {
//         name: "Afaf",
//         age: 25,
//         favoriteFood: ["cookies"]
//     },
//     {
//         name: "Khaled",
//         age: 20,
//         favoriteFood: ["burgers"]
//     }
// ]
// Person.create(arrayOfPersons, (err, data) => {
//     if (err) Person(error);
//     else{ console.log(data)}
// })
console.log("efefef");

// Person.findOne({name:"Samah"}).then((doc) => {console.log(doc);}).catch((err) => {console.log(error)};)
// app.listen(5000)

// Person.findById({_id:"61582833da9341c6dc2c425c"}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})

// Person.findById({_id:"61584069307d7c6a0bb36133"}).then((doc) => {
//     doc.favoriteFood.push("milk")
//     doc.save()
//     console.log(doc);
// })

// Person.findByIdAndUpdate({name: "Samah"}, {age:25}, {new: true}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})

// Person.findByIdAndRemove({id_:""}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})
// Person.findById({id_:""}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})

Person.remove({name: "Samah"}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})

Person.find({name: "Samah"}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})

Person.findOneAndRemove({name: "Yacine"}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})

Person.findOneAndRemove({id_:""}).then((doc) => {console.log(doc);}).catch((err) => {console.log(err);})