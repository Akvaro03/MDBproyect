//url del json
const requestURL = 'datos.json';
//buscar productos
var categoriaBuscador = "";
var numeroBuscador = 1;
let existencia = 1;

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

                        let divPrincipal = document.createElement('div');
                        divPrincipal.classList.add("carta");


                        let divImg = document.createElement('div');
                        divImg.classList.add("imgBox");

                        let Img = document.createElement('img');
                        Img.src = foto;
                        Img.classList.add("mouse");


                        let divContenido = document.createElement('div');
                        divContenido.classList.add("contentBox");

                        let titulo = document.createElement('h3');
                        titulo.textContent = "Mouse Corsair M65"

                        let contenido = document.createElement('h2');
                        contenido.classList.add("price");
                        contenido.textContent = "$61"

                        let enlace = document.createElement('a');
                        enlace.classList.add("buy");
                        enlace.textContent = "Buy Now"

                        divContenido.appendChild(titulo);
                        divContenido.appendChild(contenido);
                        divContenido.appendChild(enlace);
                        divImg.appendChild(Img);

                        divPrincipal.appendChild(divImg);
                        divPrincipal.appendChild(divContenido);
                        div.appendChild(divPrincipal);

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
                var divPrincipal = document.getElementById("noseeeee") 

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

                        let divPrincipal = document.createElement('div');
                        divPrincipal.classList.add("carta");


                        let divImg = document.createElement('div');
                        divImg.classList.add("imgBox");

                        let Img = document.createElement('img');
                        Img.src = foto;
                        Img.classList.add("mouse");


                        let divContenido = document.createElement('div');
                        divContenido.classList.add("contentBox");

                        let titulo = document.createElement('h3');
                        titulo.textContent = "Mouse Corsair M65"

                        let contenido = document.createElement('h2');
                        contenido.classList.add("price");
                        contenido.textContent = "$61"

                        let enlace = document.createElement('a');
                        enlace.classList.add("buy");
                        enlace.textContent = "Buy Now"

                        divContenido.appendChild(titulo);
                        divContenido.appendChild(contenido);
                        divContenido.appendChild(enlace);
                        divImg.appendChild(Img);

                        divPrincipal.appendChild(divImg);
                        divPrincipal.appendChild(divContenido);
                        div.appendChild(divPrincipal);

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
// let divIntento = document.getElementById("elemento");

// document.addEventListener('click', e => {
//     if(divIntento.classList.contains('intento')) {
//         console.log("hola")
//     }
let divImportante;
let botonDiv;
let numero = 0;
let residuo = 0;
let nosee = document.getElementById("noseeeee")
// })
document.addEventListener('click', e => {
    if(existencia == 2) {
    divImportante = document.querySelector(".divProducto")
    botonDiv = document.querySelector(".botonCard")
    // console.log(botonDiv)
    // console.log(e.target)
    // console.log(e.target == botonDiv)
        if (            
            e.target != divImportante
            // Ni en uno de sus hijos
            && e.target !== botonDiv
            && !divImportante.contains(e.target)) {
            numero++ 
            residuo = numero % 2
            console.log(residuo)
            if (residuo == 0) {
                // existencia = 1
                divImportante.classList.add("estiloNose");
                setTimeout(function(){
                    nosee.removeChild(nosee.lastChild); 
                },190);
                                
            }
        }
    }

})


// var divPrincipal = document.getElementById("noseeeee");

// divPrincipal.addEventListener('click', function() {
//   console.log("hola")
// })


var holaaaa = document.getElementById("productos22");
holaaaa.addEventListener('click', function() {
  window.location.href = "index.html";
})

let mostrarObjeto = () => {
    console.log("Mostrar")
}