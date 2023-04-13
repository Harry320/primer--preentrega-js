const productos = [
    {nombre: "Aros", precio: 50 },
    {nombre: "Anillos", precio: 100 },
    {nombre: "Pulseras", precio: 150 },
    {nombre: "Collares", precio: 200 },
    {nombre: "Dijes", precio: 250 },
];

let carrito = []

let seleccion = prompt ("Hola desea comprar algun producto si o no?")

while(seleccion != "si" && seleccion != "no"){
    alert( "por favor ingresar si o no ")
    seleccion = prompt ("Hola desea comprar algo si o no?")
}


if(seleccion== "si"){
    alert("a continuacion muestre lista de productos")
    let todoslosproductos = productos.map((producto) => producto.nombre + " "+ "$" + producto.precio  
    );
    alert(todoslosproductos.join("-"))

} else if(seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto !!")
}

while(seleccion !="no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Aros" || producto == "Anillos" || producto == "Pulseras" || producto == "Collares" || producto == "Dijes"){
        switch(producto){
            case "Aros":
            precio = 50 
            break; 
            case "Anillos":
            precio = 100 
            break;
            case "Pulseras":
            precio = 150 
            break;
            case "Collares":
            precio = 200 
            break;
            case "Dijes":
            precio = 250 
            break;
            default:
              break;
        }
      let unidades = parseInt(prompt("Cuantas unidades quiere llevar")) 
      carrito.push({producto,unidades,precio}) 
      console.log(carrito)
    } else{
        alert("Producto no disponible")
    }

    seleccion = prompt("Desea seguir comprando?")
    while(seleccion=== "no"){
        alert("Gracias por la compra! Hasta pronto ")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
      break;  
    }
}

const total = carrito.reduce((acc,el) => acc + el.precio * el.unidades, 0)
console.log( `el total a pagar por su compra es: ${total}`)