document.getElementById("inscription").addEventListener("gotowhatsapp",function(e){

e.preventDefault();
var erreur;
var pseudo = document.getElementById("name");
var pseudo = document.getElementById("phone");
var pseudo = document.getElementById("msg");


if (!name.value){

       erreur = "veuillez renseigner un nom";
}

if (!phone.value){

    erreur = "veuillez renseigner un numero";
}

if (!msg.value){

    erreur = "veuillez renseigner un message";
}


if (erreur){
    e.preventDefault();

    document.getElementById("erreur").innerHTML = erreur;
    return false;
}else{

    alert('Formulaire envoyé');
}


});