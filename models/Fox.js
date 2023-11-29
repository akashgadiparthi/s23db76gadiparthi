const mongoose = require("mongoose")
const FoxSchema = mongoose.Schema({
Fox_color: {type:String},
Fox_breed: {type:String},
Fox_price: {type:Number,required:true,min:4,max:50000}
})
module.exports = mongoose.model("Fox",FoxSchema)