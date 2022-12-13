res = document.getElementById('res')

function converter(bin)
{ 
    let dec = 0;
    for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) 
    {   
            dec += bin[c] * Math.pow(2, i);
    }
    res.innerHTML = ` ${bin} em decimal é ${dec}`
}
