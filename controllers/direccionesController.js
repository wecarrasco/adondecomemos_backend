var direccion = require('../schemas/direccion');

exports.getDireccion = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin', 'regular']
  // },
  handler: function(request, reply){
    var direcciones = direccion.find({_id: request.query.id}, function(err, rest){
      reply(rest);
    });
  }
}


exports.createCalcetin = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin']
  // },
  handler: function(request, reply){
    console.log(request.payload);
    var newCalcetin = new calcetin({
      nombre: request.payload.nombre,
      marca: request.payload.marca,
      color: request.payload.color,
      talla: request.payload.talla,
      tipo: request.payload.tipo,
      estampado: request.payload.estampado,
      genero: request.payload.genero,
      precio: request.payload.precio,
      img: request.payload.img
    });
    newCalcetin.save();
    console.log('calcetin saved');
    return reply('ok');
  }
}
