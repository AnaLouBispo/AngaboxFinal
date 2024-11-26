const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  awards: {
    type: String,
    required: true,                   
  },
  img:{
    type:String,
    required: true
  },
  director: {
    type: String,
    required: true
},
},
{ timestamps: true }

)
module.exports = mongoose.model("Movie", movieSchema);
