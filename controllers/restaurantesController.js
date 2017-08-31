var restaurante = require('../schemas/restaurante');

exports.getRestaurantes = {
  // auth: {
  //   mode:'required',
  //   strategy:'session',
  //   scope: ['admin', 'regular']
  // },
  handler: function(request, reply){
    var restaurantes = restaurante.find({}, function(err, rest){
      //console.log(typeof rest[0]);
      //var rest2 = rest[0];
      //var rest2 = JSON.parse(rest[0])
      //console.log(rest2["Nombre"]);
      reply(restaurantes);
    });
    //var rest = JSON.parse(restaurantes);
    //console.log(rest[0].Nombre);

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
