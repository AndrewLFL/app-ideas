var objeto = document.getElementById("objeto");
var tl = document.getElementById("tl");
var tr = document.getElementById("tr");
var br = document.getElementById("br");
var bl = document.getElementById("bl");
var btnCopiar = document.getElementById("btnCopiar");
var codigo = document.getElementById("codigo");

tl.onchange = atualizarPreview;
tr.onchange = atualizarPreview;
bl.onchange = atualizarPreview;
br.onchange = atualizarPreview;

btnCopiar.onclick = copiar;

function atualizarPreview ()
{
    var propriedade = "border-radius: " + tl.value + "% " + tr.value + "% " + bl.value + "% " + br.value + "%;"; 
    
    console.log("Propriedade: " + propriedade);
    objeto.style = propriedade;
    codigo.value = propriedade;
}

function copiar ()
{
    var codigo = document.getElementById("codigo");

        codigo.select();
        codigo.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(codigo.value);
}
