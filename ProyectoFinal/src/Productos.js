const productos = [
    { id: "1", name: "Adidas Copa", description: "Negros con blanco y rosado", stock: 4, precio: 70000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-Copa-Negro.jpg"},
    { id: "2", name: "Adidas Messi 2023", description: "Blancos con celeste y dorado", stock: 8, precio: 150000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-Messi-BlancoCeleste.jpg"},
    { id: "3", name: "Adidas Messi 2022", description: "Dorados con blanco y celeste", stock: 5, precio: 145000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-Messi-Dorados.jpg"},
    { id: "4", name: "Adidas Predator Alto", description: "Altos en blanco y rojo", stock: 14, precio: 80000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-PredatorAlto-BlancoRojo.jpg"},
    { id: "5", name: "Adidas Predator", description: "Blancos con gris y rojo", stock: 12, precio: 80000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-Predator-BlancoGris.jpg"},
    { id: "6", name: "Adidas X", description: "Blanco con verde", stock: 7, precio: 100000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-X-BlancoVerde.jpg"},
    { id: "7", name: "Adidas X", description: "Verdes con negro", stock: 4, precio: 45000, img: "/ProyectoFinal/public/img/Img-Botines/Adidas-X-Verde.jpg"},
    { id: "8", name: "Nike Air", description: "Blancos con naranja", stock: 5, precio: 85000, img: "/ProyectoFinal/public/img/Img-Botines/Nike-Air-BlancoNaranja.jpg"},
    { id: "9", name: "Nike Mercurial", description: "Todo negro", stock: 8, precio: 90000, img: "/ProyectoFinal/public/img/Img-Botines/Nike-Mercurial-Negro.jpg"},
    { id: "10", name: "Nike Phantom II", description: "Blanco con celeste", stock: 9, precio: 120000, img: "/ProyectoFinal/public/img/Img-Botines/Nike-Phantom-BlancoCeleste.jpg"},
    { id: "11", name: "Nike Phantom I", description: "Negros con dorado", stock: 5, precio: 78000, img: "/ProyectoFinal/public/img/Img-Botines/Nike-Phantom-NegroDorado.jpg"},
    { id: "12", name: "Nike Tiempo", description: "Blancos con celeste y amarillo", stock: 7, precio: 84000, img: "/ProyectoFinal/public/img/Img-Botines/Nike-Tiempo-BlancoCelesteAmarillo.jpg"},
    { id: "13", name: "Nike Vapor", description: "Amarillos", stock: 10, precio: 74000, img: "/ProyectoFinal/public/img/Img-Botines/Nike-Vapor-Amarillo.jpg"},
    { id: "14", name: "Puma Future", description: "Blanco con rojo", stock: 4, precio: 100000, img: "/ProyectoFinal/public/img/Img-Botines/Puma-Future-BlancoRojo.jpg"},
    { id: "15", name: "Puma Future", description: "Verde", stock: 8, precio: 100000, img: "/ProyectoFinal/public/img/Img-Botines/Puma-Future-Verde.jpg"},
  ];

// ;) ;) 
// export const getProducts = () => { 

//     return new Promise( (resolve, reject) => { 
//         if(products.length > 0) {
//             setTimeout ( () => { 
//                  resolve( products )   
//              }, 2000)
//         } else {
//             reject("No hay productos, valla a comprar a otro lado")
//         }
//     } )
//  }