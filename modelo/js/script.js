//alert("Testando alert");
/* var resposta = confirm("Deseja excluir?");

console.log(resposta); */

var a = 10;
var b = 33;

function somar(a, b){
    return a + b;
};

//console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click",function () {
    let valorA = document.querySelector("#valorA").value;
    let valorB = document.querySelector("#valorB").value;

    if(valorA.length > 0 && valorB.length > 0) {
        alert(parseInt(valorA)+ parseInt(valorB));
    } else {
        alert("Informe os valores!");
    }
} );