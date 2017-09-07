var mongoose = require('mongoose');

var RestauranteSchema = new mongoose.Schema({
  id : mongoose.Schema.Types.ObjectId,
  nombre : String,
  sucursales : [{
      numero : Number,
      direccion: String,
      latitud: String,
      longitud: String,
      telefonos: [String],
      horario: {
        lunes: {
          entra: Number,
          sale: Number
        },
        martes: {
          entra: Number,
          sale: Number
        },
        miercoles: {
          entra: Number,
          sale: Number
        },
        jueves: {
          entra: Number,
          sale: Number
        },
        viernes: {
          entra: Number,
          sale: Number
        },
        sabado: {
          entra: Number,
          sale: Number
        },
        domingo: {
          entra: Number,
          sale: Number
        }
      }
  }],
  menu: [{
    nombre: String,
    descripcion: String,
    precio: String
  }],
  comentarios: [{
    numero: Number,
    numero_sucursal: Number,
    comentario: String,
    fecha: Date,
    cant_estrellas: {
      type: Number,
      min: 0,
      max: 5
    }
  }],
  fotos: [String],
  redes: {
    facebook: String,
    correo: String,
    twitter: String
  },
  username: String,
  password: String,
  cant_favs: Number,
  tags: String
},{
  collection: 'restaurante'
});

module.exports = mongoose.model('restaruante', RestauranteSchema);
