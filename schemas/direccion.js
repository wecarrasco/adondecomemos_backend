var mongoose = require('mongoose');

var DireccionSchema = new mongoose.Schema({
  id : mongoose.Schema.Types.ObjectId,
  direccion : String,
  latitud : String,
  longitud: String,
  telefonos: [String],
  horario: [String],
},{
  collection: 'direcciones'
});

module.exports = mongoose.model('direcciones', DireccionSchema);
