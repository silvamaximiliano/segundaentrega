// crear clase para ofuncion de objeto

class articulo {
    constructor(nombre, id, talle, precio) {
      this.nombre = nombre
      this.id = id
      this.talle = talle
      this.precio = precio
    }
  }
  
  //agregar articulos al arreglo
  const articulos = [
    new articulo('remera', 1, 32, 7000),
    new articulo('pantalon', 2, 42, 11000),
    new articulo('camisa', 3, 25, 10000),
    new articulo('buzo', 4, 35, 18000),
  ]
  let articuloDeseado =prompt(
      'Escoge el numero o nombre de articulo que deseas comprar? 1.Remera - 2.Pantalon - 3.camisa - 4.buzo'
    )
  let escogioArticulo = false
  
  let carrito = []
 
  while (escogioArticulo === false) {
//buscar si existe el producto escogido
    const productos =articulos.find(articulo=>articulo.nombre === articuloDeseado.toLowerCase().trim())
//guadar en carrito
if (productos){
  carrito.push(productos)
}else{
  let articuloDeseado =prompt(
    'Escoge un producto correcto .Remera - .Pantalon - .camisa - .buzo'
  )
 continue
}
const decicion =prompt ("deseas seguir comprando ? -si o -no ")
if (decicion==="si"){
  articuloDeseado =prompt(
    'Escoge un producto correcto .Remera - .Pantalon - .camisa - .buzo'
  )

}else{
  
  escogioArticulo=true
}


}
console.log(carrito)
  
let totalCompra = 0
for (const producto of carrito) {
  totalCompra = totalCompra + producto.precio
  
}
alert ("el monto a abonar es "+totalCompra)

  
 
 
 
 
 
 
 
 
 
 
 
 
 