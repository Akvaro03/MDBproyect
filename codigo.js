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
                function escribir() {
                    div.innerHTML="";
                    objetosPorMenor.forEach(element => {
                        let nombre = element.category;
                        let precio = element.precio;
                        let categoria = element.category;



                        let divCard = document.createElement("div");
                        divCard.classList.add("card");

                        // INICIO FOTO PRODUCTO
                        let divOverlay = document.createElement("div");
                        divOverlay.classList.add("view");
                        divOverlay.classList.add("Overlay");

                        const imgOverlay = document.createElement("img");
                        imgOverlay.classList.add("card-img-top");
                        imgOverlay.src = "https://mdbootstrap.com/img/Photos/Others/images/16.webp";
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
                        buttomCardBody.textContent = "Read more"

                        cardBody.appendChild(h4CardBody);
                        cardBody.appendChild(pCardBody);
                        cardBody.appendChild(buttomCardBody);


                        divCard.appendChild(cardBody);

                        div.appendChild(divCard);
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
                        let nombre = element.category;
                        let precio = element.precio;
                        let categoria = element.category;



                        let divCard = document.createElement("div");
                        divCard.classList.add("card");

                        // INICIO FOTO PRODUCTO
                        let divOverlay = document.createElement("div");
                        divOverlay.classList.add("view");
                        divOverlay.classList.add("Overlay");

                        const imgOverlay = document.createElement("img");
                        imgOverlay.classList.add("card-img-top");
                        imgOverlay.src = "https://mdbootstrap.com/img/Photos/Others/images/16.webp";
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
                        buttomCardBody.textContent = "Read more"

                        cardBody.appendChild(h4CardBody);
                        cardBody.appendChild(pCardBody);
                        cardBody.appendChild(buttomCardBody);


                        divCard.appendChild(cardBody);

                        div.appendChild(divCard);
                        // const div = document.createElement("div").className("card");
                        // div.innerHTML = element.precio                        
                        // document.body.appendChild(div);                        
                    })  
                }
                escribir()

        
                console.log(objetosPorMayor)
        
            }
            
            porMayor()
        }


    }

    fetch(requestURL)
    .then(response => response.json())
    .then(json => toJSon(json))
    



}
console.log(categoriaBuscador)
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

document.getElementById('menorPrecio').onclick = () =>{
    saludar()
};
document.getElementById('mayorPrecio').onclick = function (){
    saludar()
};
