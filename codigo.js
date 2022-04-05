//url del json
const requestURL = 'datos.json';
//buscar productos
var categoriaBuscador = "";
var numeroBuscador = 1;
async function buscar(category, filtroPrecio){ //categoria, filtroPrecio
    async function toJSon(data){
        // Menor precio
        if(filtroPrecio == 1){
            async function porMenor() {
                let base = [];
            
    
                //buscar todos los precios de los productos
                await data.forEach(element => {
                    if(element.category == category){
                        base.push(element.precio)            
                    } else if(category == ""){
                        base.push(element.precio)            
                    }
                })
        
                //ordenar los datos de menor a mayor
                let IntentoPorMenor = (dato) => {
                    const intento = dato.sort((a, b) => {
                        if(a == b) {
                            return 0; 
                        }
                        if(a < b) {
                            return -1;
                        }
                        return 1;
                    });
                    return intento;
                }
            
                //arrays para guardar los objetos guardados
                let objetosPorMenor = [];
        
                //buscar los objetos y guardarlos por menor
                let guardarDatosMenor = async (numero) => {
                    await data.forEach(element => {
                        if(element.category == category){
                            // console.log(element.precio)
                            if(element.precio == numero){
                                objetosPorMenor.push(element)
                            }
                        } else if(category == ""){
                            if(element.precio == numero){
                                objetosPorMenor.push(element)
                            }
                        }
                    })  
                }    
        
                //numero de objetos en el array
                let numeroDeProduto = IntentoPorMenor(base).length;
        
                // buscar cada objeto segun la lista de precios
                for (let i = 0; i < numeroDeProduto; i++) {
                    guardarDatosMenor(IntentoPorMenor(base)[i])
                }

                var div = document.getElementById("productos33") 
                var divPrincipal = document.getElementById("noseeeee") 

                function escribir() {
                    div.innerHTML="";
                    objetosPorMenor.forEach(element => {
                        const nf = new Intl.NumberFormat("es-AR");

                        let nombre = element.name;
                        let precio = element.precio;
                        precio = nf.format(precio)
                        let categoria = element.category;
                        let foto = element.foto;


                        let divCard = document.createElement("div");
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

                        const aOverlay = document.createElement("a");
                        aOverlay.href = "#!";

                        let divA = document.createElement("div");
                        divA.classList.add("mask");
                        divA.classList.add("rgba-white-slight");
                        aOverlay.appendChild(divA);

                        divOverlay.appendChild(aOverlay);
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
                        pCardBody.textContent = precio

                        let buttomCardBody = document.createElement("button");
                        buttomCardBody.classList.add("btn");

                        buttomCardBody.onclick = () =>{
                            // creacion del div principal
                            let divProducto = document.createElement("div");
                            divProducto.classList.add("divProducto");

                            // creacion del div responsive
                            let divProductoContenido = document.createElement("div");
                            divProductoContenido.classList.add("row");
                            divProductoContenido.classList.add("container-fluid");

                            let imgProducto = document.createElement("img");
                            imgProducto.classList.add("col-md-6");
                            imgProducto.classList.add("col-12");

                            imgProducto.classList.add("fotoProducto");
                            imgProducto.src = foto;

                            let divProductoContenidoLetra = document.createElement("div");
                            divProductoContenidoLetra.classList.add("col-md-6");
                            divProductoContenidoLetra.classList.add("col-12");

                            let divProductoTitulo = document.createElement("h1");
                            divProductoTitulo.classList.add("responsive-font-example");
                            divProductoTitulo.classList.add("mt-5");
                            divProductoTitulo.textContent = nombre;

                            divProductoContenido.appendChild(imgProducto);
                            divProductoContenido.appendChild(divProductoContenidoLetra);
                            divProductoContenidoLetra.appendChild(divProductoTitulo);

                            divProducto.appendChild(divProductoContenido)
                            divPrincipal.appendChild(divProducto)
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
                        divCard.id = "elemento"
                        // const div = document.createElement("div").className("card");
                        // div.innerHTML = element.precio                        
                        // document.body.appendChild(div);                        
                    })  
                }
                escribir()

        
                console.log(objetosPorMenor)    

            }    
            porMenor()
        }
        // mayor precio
        if(filtroPrecio == 2) {
            async function  porMayor(){
                let base = [];
            
    
                //buscar todos los precios de los productos
                await data.forEach(element => {
                    if(element.category == category){
                        // console.log(Object.keys(data).length)
        
                        base.push(element.precio)            
                    } else if(category == ""){
                        base.push(element.precio)            
                    }
                })
            
                //ordenar los datos de menor a mayor
                let IntentoPorMayor = (dato) => {
                    const intento = dato.sort((a, b) => {
                        if(a == b) {
                            return 0; 
                        }
                        if(a > b) {
                            return -1;
                        }
                        return 1;
                    });
                    return intento;
                }
        
                //arrays para guardar los objetos guardados
                let objetosPorMayor = [];
        
                //buscar los objetos y guardarlos por mayor
                let guardarDatosMayor = async (numero) => {
                    await data.forEach(element => {
                        if(element.category == category){
                            // console.log(element.precio)
                            if(element.precio == numero){
                                objetosPorMayor.push(element)
                            }
                        } else if(category == ""){
                            if(element.precio == numero){
                                objetosPorMayor.push(element)
                            }
                        }
                    })  
                }
        
        
                //numero de objetos en el array
                let numeroDeProduto = IntentoPorMayor(base).length;
        
                for (let i = 0; i < numeroDeProduto; i++) {
                    guardarDatosMayor(IntentoPorMayor(base)[i])
                }
        
                var div = document.getElementById("productos33")
                function escribir() {
                    div.innerHTML="";
                    objetosPorMayor.forEach(element => {
                        const nf = new Intl.NumberFormat("es-AR");

                        let nombre = element.name;
                        let precio = element.precio;
                        precio = nf.format(precio)
                        let categoria = element.category;
                        let foto = element.foto;
                        console.log(precio)



                        let divCard = document.createElement("div");
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

                        const aOverlay = document.createElement("a");
                        aOverlay.href = "#!";

                        let divA = document.createElement("div");
                        divA.classList.add("mask");
                        divA.classList.add("rgba-white-slight");
                        aOverlay.appendChild(divA);

                        divOverlay.appendChild(aOverlay);
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
                        pCardBody.textContent = precio

                        let buttomCardBody = document.createElement("button");
                        buttomCardBody.classList.add("btn");
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
                        // const div = document.createElement("div").className("card");
                        // div.innerHTML = element.precio                        
                        // document.body.appendChild(div);                        
                    })  
                }
                escribir()       

            }
            
            porMayor()
        }

    }

    fetch(requestURL)
    .then(response => response.json())
    .then(json => toJSon(json))
    



}
buscar(categoriaBuscador, numeroBuscador);

function preBuscar (opcion) {
    let numero = opcion.value;
    console.log(categoriaBuscador);
    numeroBuscador = opcion.value;
    console.log(numeroBuscador)
    buscar(categoriaBuscador, numero);
}

function cambiarVariable (opcion) {
    categoriaBuscador = opcion
    console.log(categoriaBuscador);
    buscar(categoriaBuscador, numeroBuscador);
}

var holaaaa = document.getElementById("productos22");
holaaaa.addEventListener('click', function() {
  window.location.href = "index.html";
})

let mostrarObjeto = () => {
    console.log("Mostrar")
}