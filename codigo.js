//url del json
const requestURL = 'datos.json';
//buscar productos
async function buscar(category, filtroPrecio){ //categoria, filtroPrecio
    async function toJSon(data){
        console.log(filtroPrecio)
        if(filtroPrecio === 1){
            async function porMenor() {
                let base = [];
            
    
                //buscar todos los precios de los productos
                await data.forEach(element => {
                    if(element.category === category){
                        // console.log(Object.keys(data).length)
        
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
                        if(element.category === category){
                            // console.log(element.precio)
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
                function escribir() {
                    objetosPorMenor.forEach(element => {
                        const div = document.createElement("div");
                        div.innerHTML = element.precio                        
                        document.body.appendChild(div);                        
                        // document.getElementById("productos33").innerHTML=element.precio
                    })  
                }
                escribir()

        
                console.log(objetosPorMenor)    

            }    
            porMenor()
        }

        if(filtroPrecio == 2) {
            async function  porMayor(){
                let base = [];
            
    
                //buscar todos los precios de los productos
                await data.forEach(element => {
                    if(element.category === category){
                        // console.log(Object.keys(data).length)
        
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
                        if(element.category === category){
                            // console.log(element.precio)
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
        
        
        
                console.log(objetosPorMayor)
        
            }
            
            porMayor()
        }


    }

    fetch(requestURL)
    .then(response => response.json())
    .then(json => toJSon(json))
    



}
buscar('cpu_amd', 1);

