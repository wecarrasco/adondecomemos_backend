var mongoose = require('mongoose');

var RestauranteSchema = new mongoose.Schema({
  id : mongoose.Schema.Types.ObjectId,
  nombre : String,
  direcciones : [mongoose.Schema.Types.ObjectId],
  menu: [mongoose.Schema.Types.ObjectId],
  comentarios: [mongoose.Schema.Types.ObjectId],
  fotos: [String],
  promociones: [mongoose.Schema.Types.ObjectId],
  redes: [],
  username: String,
  password: String,
  cant_favs: Number
},{
  collection: 'restaurante'
});

module.exports = mongoose.model('restaruante', RestauranteSchema);
