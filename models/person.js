const mongoose = require("mongoose");
const { Schema } = mongoose;
// SCHEMA CREATION
const personSchema = new Schema ({
    name: { type: String, required: true },
    age: Number,
    favoriteFood: [String]
})
// MODEL CREATION
const person = mongoose.model("Person", personSchema)
// EXPORT
module.exports = person
