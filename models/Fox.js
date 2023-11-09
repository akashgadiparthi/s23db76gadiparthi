const mongoose = require("mongoose")
const FoxSchema = mongoose.Schema({
Fox_color: String,
Fox_breed: String,
Fox_price: Number
})
module.exports = mongoose.model("Fox",FoxSchema)