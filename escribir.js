var divCard = document.createElement("div");
divCard.classList.add("card");
divCard.classList.add("cosaRara");

// INICIO FOTO PRODUCTO
let divOverlay = document.createElement("div");
divOverlay.classList.add("view");
divOverlay.classList.add("Overlay");

const imgOverlay = document.createElement("img");
imgOverlay.classList.add("card-img-top");
imgOverlay.src = foto;
imgOverlay.alt = "Logo Javascript";
divOverlay.appendChild(imgOverlay);

divCard.appendChild(divOverlay);
// FIN FOTO PRODUCTO

// INICIO CUERPO DEL PRODUCTO
let cardBody = document.createElement("div");
cardBody.classList.add("card-body");
cardBody.classList.add("cosaRara");

let circulo = document.createElement("div");
circulo.classList.add("circulos2");

let h4CardBody = document.createElement("h4");
h4CardBody.classList.add("card-title");
h4CardBody.textContent = nombre

let pCardBody = document.createElement("p");
pCardBody.classList.add("card-text");
pCardBody.textContent = "$" + precio

let buttomCardBody = document.createElement("button");
buttomCardBody.classList.add("botonCard");
buttomCardBody.classList.add("btn");

buttomCardBody.onclick = () =>{
    // creacion del div principal
    let divProducto = document.createElement("div");
    divProducto.classList.add("divProducto");

    // creacion del div responsive
    let divProductoContenido = document.createElement("div");
    divProductoContenido.classList.add("row");
    divProductoContenido.classList.add("container-fluid");

    // const imgOverlay = document.createElement("img");
    // imgOverlay.classList.add("card-img-top");
    // imgOverlay.src = foto;
    // imgOverlay.alt = "Logo Javascript";
    // divOverlay.appendChild(imgOverlay);

    let divProductoTitulo = document.createElement("img");
    divProductoTitulo.src = foto;
    // divProductoTitulo.classList.add("responsive-font-example");
    // divProductoTitulo.classList.add("text-center");
    // divProductoTitulo.classList.add("mt-5");
    // divProductoTitulo.classList.add("pt-5");
    // divProductoTitulo.textContent = "Esta parte esta en proceso";
    divProductoTitulo.classList.add("col-md-12");
    divProductoTitulo.classList.add("col-12");

    let divProductoTitulo2 = document.createElement("p");
    divProductoTitulo2.classList.add("responsive-font-example2");
    divProductoTitulo2.classList.add("text-center");
    divProductoTitulo2.classList.add("mt-5");
    divProductoTitulo2.classList.add("pt-5");
    divProductoTitulo2.textContent = "Tocar afuera para salir";
    divProductoTitulo2.classList.add("col-md-12");
    divProductoTitulo2.classList.add("col-12");


    // imgProducto.classList.add("fotoProducto");
    // imgProducto.src = foto;


    // let divProductoTitulo = document.createElement("h1");
    // divProductoTitulo.classList.add("responsive-font-example");
    // divProductoTitulo.classList.add("mt-5");
    // divProductoTitulo.textContent = nombre;

    divProductoContenido.appendChild(divProductoTitulo);
    divProductoContenido.appendChild(divProductoTitulo2);

    divProducto.appendChild(divProductoContenido)
    divPrincipal.appendChild(divProducto)
    existencia = 2;
    console.log(existencia)    
}

// document.getElementById('elemento').onclick = (parametro) =>{
//     // contenido de la funcoion
//     }
    
buttomCardBody.classList.add("btn-light-blue");
buttomCardBody.classList.add("btn-md");
buttomCardBody.textContent = "Comprar"
// FIN CUERPO DEL PRODUCTO

cardBody.appendChild(circulo);
cardBody.appendChild(h4CardBody);
cardBody.appendChild(pCardBody);
cardBody.appendChild(buttomCardBody);


divCard.appendChild(cardBody);
divCard.classList.add("intento");

div.appendChild(divCard);
// divCard.id = "elemento"

