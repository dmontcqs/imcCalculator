
//CONSIGNA INTENTAR NO DUPLICAR CÓDIGO: 

// AQUÍ declarar variables globales 

let kg = 0; 
let estatura = 0; 
let imc = 0;
let correo = "escriba su correo por favor para enviarle info: "; 

let mensajeCorreo = "desea tener info sobre cómo cuidarse? si/no"; 
let mensajeFinal = "Listo. le enviaremos información a su correo para cuidarse" 


// aquí funcion sin mucho interés: 

function userData(){
kg = prompt("ingresa tus kilos");
estatura = prompt("ingresa tu estatura EN METROS")
}


// aquí creo una función global -la estructura lógico-matemática que usará programa. 

function calculaIMC(){
    imc = kg / (estatura*estatura)
    alert("su imc es de " +  imc)
}

// aquí creo otra función global -la estructura lógico-matemática que utilizará  programa. 

function preguntaCorreo (){
    let preguntaCuidarse = prompt(mensajeCorreo)
        if (preguntaCuidarse == "si"){ 
            prompt(correo); 
            alert(mensajeFinal); 
        } else if (preguntaCuidarse == "no") { 
            alert("Ok. gracias por participar")
        } else {
            alert("valor inválido. vuelva a intentarlo")
        }
} //

function mensajeIMC (){
    if (imc < 18.5 ) {
        alert("tiene usted bajo peso"); 
        // aquí invoco a la función (ya no duplico código)
        preguntaCorreo(); 

    } else if (imc <= 24.9){
        alert("Está usted saludable");
        alert("GRACIAS POR PARTICIPAR")
        
    } else if (imc <= 29.9){

        alert("Usted tiene sobrepeso"); 
         // aquí invoco a la función (ya no duplico código)
        preguntaCorreo(); 

    } else if (imc <= 39.9) {
        alert("Usted es obeso");
         // aquí invoco a la función (ya no duplico código)
        preguntaCorreo(); 
    } else if (imc > 40) {
        alert("Usted tiene odesidad extrema o de alto riesgo"); 
         // aquí invoco a la función (ya no duplico código)
        preguntaCorreo(); 
    }
    else {
        alert("invalid value")
    }   
}



userData(); 
calculaIMC(); 
mensajeIMC(); 

// falta hacer repositorio; 


//REFORZAR:  cómo pasar parámetros... parece que debemos primero declarar variables y funciones globales, aquello que se utilizará más a lo largo del programa pues no debemos repetir código. Cuando llamemos a las funciones en la ejecución del programa, en sus parámetros podemos cambiar los valores con los que operará la función, usaremos data a nuestro gusto en los llamados a las funciones para recibir output esperado. 


