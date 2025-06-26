let estilo;
const formulario1 = document.getElementById("formulario1");
const formulario2 = document.getElementById("formulario2");


function pegarInfo(value){
    estilo = parseFloat(value);
    console.log("valor do estilo:"+ estilo);
}

function pegarDados() {
    
    const local = parseFloat(document.getElementById("localSelecionado").value);
    const tamanho = parseFloat(document.getElementById("tamanhoSelecionado").value);

    calcula(local,tamanho,estilo)
}

function calcula(local,tamanho,estilo) {
    var resultado = local + tamanho + estilo;
    var resultadoAvista = document.getElementById("resultado");
    resultadoAvista.style.color = " #f5f5f5";
    document.getElementById("resultado").textContent = resultado;
}

function mostrarValor(){
    var resultadoAvista = document.getElementById("resultado");
    resultadoAvista.style.color = "#333";
}