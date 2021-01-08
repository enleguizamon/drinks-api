const mongoose = require("mongoose")

const drinkSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  mainIngredient: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("Drink", drinkSchema)