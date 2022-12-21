//Textareas

var json_01 = document.getElementById("json_01");
var json_02 = document.getElementById("json_02");
var csv_01 = document.getElementById("csv_01");
var csv_02 = document.getElementById("csv_02");

//Botoes

var btnLimpar_01 = document.getElementById("limpar_01");
var btnLimpar_02 = document.getElementById("limpar_02");
var conv_json_csv = document.getElementById("conv_json_csv");
var conv_csv_json = document.getElementById("conv_csv_json");
var btnCopiar_01 = document.getElementById("btnCopiar_01");
var btnCopiar_02 = document.getElementById("btnCopiar_02");

function converter_json_csv ()
{   
        console.log(json_01.value);
        csv_01.innerHTML = " ";
        if(!validar_json(json_01.value))
        return;
        
        var objDados = JSON.parse(json_01.value);
        console.log(objDados);

        var stringDados = JSON.stringify(objDados)
        console.log(stringDados);

        var propriedades = [];
        var quebraLinhas = stringDados.split(",");
        for(let i =0 ; i<quebraLinhas.length; i++)
        {
            console.log(quebraLinhas[i])
        }

        for(item of quebraLinhas)
        {
            let nomes = item.split('"');
            console.log(nomes)
            propriedades.push(nomes[1]);
        }
        console.log(propriedades);

        var prototipoCSV = [];
        prototipoCSV[0] = '';
        for(prop of propriedades)
        {
             prototipoCSV[0]+= '"' + prop + '",';

        }
        console.log(prototipoCSV);

        prototipoCSV[0] += '\n'
        for(let i =0; i<quebraLinhas.length ; i++)
        {
            prototipoCSV[i+1] = '';
            dados = quebraLinhas[i].split(':');
            console.log(` esse é o ${i} dado: ${dados}`);
            if(i==quebraLinhas.length-1)
            {
                let subDados = dados[1].split('}');
                prototipoCSV += subDados[0] 
            }
            else
            prototipoCSV += dados[1]  + ','
        }
        csv_01.innerHTML = prototipoCSV;
}


function converter_csv_json ()
{
    console.log(csv_02.value);
}

function limpar_01 () 
{
    json_01.value = "";
    csv_01.value = "";
}

function limpar_02 ()
{
    json_02.value = "";
    csv_02.value = "";
}

btnCopiar_01.addEventListener('click', function copiar_01(e) {

    let csv = document.getElementById("csv_01");
    csv.select();
    document.execCommand('copy');
    
  });
  
btnCopiar_02.addEventListener('click', function copiar_02(e) {
  
      let json = document.getElementById("json_02");
      json.select();
      document.execCommand('copy');
      
    });
    
function validar_json(json)
{
    if(json.length===0)
    {
        window.alert("Por favor, insira um JSON!");
        return false;
    }

    try{
        let json_val = JSON.parse(json)
    }
    catch(e){
        alert("O JSON inserido é invalido!");
        return false;
    }

    return true;
}

function validar_csv(csv)
{
    if(csv.length===0)
    {
        window.alert("Por favor, insira um CSV!");
        return false;
    }

    try{
        let csv_val = JSON.parse(csv)
    }
    catch(e){
        alert("O CSV inserido é invalido!");
        return false;
    }

    return true;
}