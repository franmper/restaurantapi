const mongoose = require("mongoose");

const RestaurantsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  logo: {
    type: String,
  },
  phone: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
});

RestaurantsSchema.index({name: 'text'});

module.exports = mongoose.model("Restaurant", RestaurantsSchema);
