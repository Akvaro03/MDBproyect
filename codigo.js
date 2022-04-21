//url del json de los objetos
const requestURL = 'datos.json';

//definicion de variables
var categoriaBuscador = "";
var numeroBuscador = 1;
let existencia = 1;
let cantidadDeTarjetas = 0;
let buttonCarrito;
let contadorCarrito = 0;
let carrito = document.getElementById("carrito")
// funcion principal para buscar y mostrar los objetos
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
                        cantidadDeTarjetas ++;
                        const nf = new Intl.NumberFormat("es-AR");

                        let nombre = element.name;
                        let precio = element.precio;
                        precio = nf.format(precio)
                        let categoria = element.category;
                        let foto = element.foto;
                        let id = element.id;

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
                        titulo.textContent = nombre

                        let contenido = document.createElement('h2');
                        contenido.classList.add("price");
                        contenido.textContent = `$${precio}`

                        let enlace = document.createElement('a');
                        enlace.classList.add("buy");
                        enlace.id = id;
                        enlace.textContent = "Agregar al carrito"

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
                        buttonCarrito = document.querySelectorAll("buy");          
                        buttonCarrito.forEach((element) => {
                            console.log(element)
                            element.addEventListener("click", (e) => {
                                e.preventDefault();
                                console.log(e.target.id)
                            })
                        })

                    })  
                    buttonCarrito = document.querySelectorAll(".buy");   
                    agregarFuncionesCarrita(buttonCarrito)
                }
                escribir()

        
            }    
            porMenor();
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
                        cantidadDeTarjetas ++;

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
                        buttonCarrito = document.querySelectorAll("buy");          
                        buttonCarrito.forEach((element) => {
                            console.log(element)
                            element.addEventListener("click", (e) => {
                                e.preventDefault();
                                console.log(e.target)
                            })
                        })                  
                    })  
                }
                buttonCarrito = document.querySelectorAll(".buy");   
                agregarFuncionesCarrita(buttonCarrito)

                escribir()       

            }
            buttonCarrito = document.querySelectorAll("buy");          

            porMayor()
        }

    }

    fetch(requestURL)
    .then(response => response.json())
    .then(json => toJSon(json))
    

    
}
//mostrar los objetos por defecto
buscar(categoriaBuscador, numeroBuscador);

//busca segun la categoria y el ordenar
function preBuscar (opcion) {
    let numero = opcion.value;
    console.log(categoriaBuscador);
    numeroBuscador = opcion.value;
    console.log(numeroBuscador)
    cantidadDeTarjetas = 0

    if (cantidadDeTarjetas <= 4) {
        console.log("hola")
        document.body.style.height = "20%";
    }

    buscar(categoriaBuscador, numero);
}
function cambiarVariable (opcion) {
    categoriaBuscador = opcion
    console.log(categoriaBuscador);
    cantidadDeTarjetas = 0

    if (cantidadDeTarjetas <= 4) {
        console.log("hola")
        document.getElementById("circulo1").style.height = "50%";
        document.getElementById("circulo1").style.width = "50%";
        // document.body.style.height = "100vh";
    }

    buscar(categoriaBuscador, numeroBuscador);
}

let inicio = document.getElementById("inicio");
inicio.addEventListener('click', function() {
    window.location.href = "index.html";
})

const listaProducto = document.querySelector("#lista-carrito tbody");

let agregarFuncionesCarrita = (element) => {
    element.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        document.createDocumentFragment
        contadorCarrito ++
        console.log(contadorCarrito);
        console.log(e.target.id)
        let producto = e.target.parentElement.parentElement
        leerDatosProducto(producto)
    })
})
}
let leerDatosProducto = (poducto) => {
    console.log(poducto.querySelector('.price').textContent);
    const infoProduto = {
        titulo: poducto.querySelector('h3').textContent,
        price: poducto.querySelector('.price').textContent,
        id: poducto.querySelector('.buy').id
    }
    insertarCarrito(infoProduto)
}
let insertarCarrito = (element) => {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>${element.titulo}</td>
       <td>${element.price}</td>
       <td>
        <a href="#" class="borrar-platillo" data-id="${element.id}">X</a>
       </td>
    `;
    listaProducto.appendChild(row);
}