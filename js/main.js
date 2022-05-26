
function clicou(){
    alert("Obrigada por clicar");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

//var lista = ["Thalyta", "Eliete", "Murilo"];
//lista.push("Gerson");
//lista.pop();

//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" - "));

var name = "ZUP";
var frase = "Aqui é a melhor empresa";
//alert("Abrir minha pagina da Zup");
console.log(frase.toLowerCase());
alert (frase.replace("Aqui", "Zup"));