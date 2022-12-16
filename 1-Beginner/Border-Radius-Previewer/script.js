var objeto = document.getElementById("objeto");
var tl = document.getElementById("tl");
var tr = document.getElementById("tr");
var br = document.getElementById("br");
var bl = document.getElementById("bl");
var btnCopiar = document.getElementById("btnCopiar");

tl.onchange = atualizarPreview;
tr.onchange = atualizarPreview;
bl.onchange = atualizarPreview;
br.onchange = atualizarPreview;

btnCopiar.onclick = copiar;

function atualizarPreview ()
{
    var propriedade = "border-radius: " + tl.value + "px " + tr.value + "px " + bl.value + "px " + br.value + "px;"; 
    
    console.log("Propriedade: " + propriedade);

    objeto.style = propriedade;
}

function copiar ()
{

}
