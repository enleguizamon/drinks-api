const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  favDrink: {
    type: String
  }
})

module.exports = mongoose.model("User", userSchema)