

/*
VALIDAR SUBMIT
*/
function validar(){
    var postala=document.getElementById("postala");
    if(emaila() && postalLuze()){
        return true;
    }else{
        return false;
    }
}
/*
VALIDACION EMAIL
*/
function emaila(){
    var email=document.getElementById("email");
    if(email.value==null || email.value.length==0 ){
        alert("El email esta vacio.");
        return false;
        
    }else if(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/.test(email.value)){
            return true;
    }else{
        alert("El email introducido no existe.");
        return false;
    }
    
}
/*
NOMBRE SOLO METER LETRAS
*/
function nom(evt){
    key = evt.keyCode || evt.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }
     }

     if(letras.indexOf(tecla)==-1 && !tecla_especial){
         alert("mete una letra");
         return false;
     }else{
         return evt;
     }
 }
/*
POBLACION SOLO METER LETRAS
*/
 function pob(evt){
    key = evt.keyCode || evt.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for(var i in especiales){
         if(key == especiales[i]){
             tecla_especial = true;
             break;
         }
     }

     if(letras.indexOf(tecla)==-1 && !tecla_especial){
         alert("mete una letra");
         return false;
     }else{
         return evt;
     }
 }
 
 /*
CODIGO POSTAL SOLO METER 5 NUMEROS
*/

function postal(evt){
    var postal=document.getElementById("postala");
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        alert("Mete un numero!");
        return false;
    }else if(postal.value.length>4){
        alert("El codigo postal no tiene mas de 5 numeros.");
        return false;
    }else{
        return evt;
    }
}
/*
CODIGO POSTAL QUE TENGA 5 NUMEROS
*/
function postalLuze(){
    var postal=document.getElementById("postal");
    if(postal.value.length==5){
        return true;
    }else{
        alert("El codigo postal tiene que tener 5 numeros.")
        return false;
    }
}

/*
TELEFONO SOLO METER 9 NUMEROS
*/
function telef(evt){
    var telefono=document.getElementById("telefono");
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)){
        alert("Mete un numero!");
        return false;
    }else if(telefono.value.length>8){
        alert("El telefono no tiene mas de 9 numeros.");
        return false;
    }else{
        return evt;
    }
}
function validar(obj) {
    var telefono=document.getElementById("telefono").value.charAt(0);
    if(num!='6') {
      alert('El telefono debe empezar por 6');
      obj.focus();
    }
    if(obj.value.length<9){
    alert('El telefono debe tener 9 cifras');
    obj.focus();
    }
  } 

  /*
  Cambia algunos colores de la pagina al hacer click en el boton de "cambiar tema"
  */
function CambiarTema(){
    var cuerpo = document.getElementsByTagName("body")[0];
    var textop = document.getElementsByTagName("p");
    var textotitulo = document.getElementsByTagName("h2");
    var textof = document.getElementsByTagName("label");
    
    if (cuerpo.style.backgroundColor == "rgb(26, 30, 53)") {
        cuerpo.style.backgroundColor = "grey";
        textotitulo[1].style.color = "black";
        textop[6].style.color = "black";
        textof[0].style.color = "black";
        textof[1].style.color = "black";
        textof[2].style.color = "black";
        textof[3].style.color = "black";
        textof[4].style.color = "black";
        textof[5].style.color = "black";
        
    } else {
        
        cuerpo.style.backgroundColor = "rgb(26, 30, 53)";
        textotitulo[1].style.color = "white";
        textop[6].style.color = "white";
        textof[1].style.color = "white";
        textof[2].style.color = "white";
        textof[3].style.color = "white";
        textof[4].style.color = "white";
        textof[5].style.color = "white";
    }
}



