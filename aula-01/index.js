const converterTemp = document.querySelector('button');

converterTemp.onclick = conversaoEscolhido; 

function conversaoEscolhido() {
  var tipoConverter = document.querySelector('.temps').value;
  var entradaTemp = Number(document.querySelector('#number-usuario').value);
  var tipoPara= document.querySelector('.tempsConverter').value;
  var temperatura = 0; 
  
  if(tipoConverter == "celsius" ) {
    if(tipoPara == "fhr") {
      temperatura = (entradaTemp * 9/5) + 32; 
    } else if (tipoPara == "kln") {
      temperatura= entradaTemp + 273.15; 
    } else { 
      temperatura = entradaTemp; 
    }
  }
  if(tipoConverter == "fhr"){
    if(tipoPara == "celsius"){
      temperatura= (entradaTemp - 32) * 5/9;
    } else if (tipoPara == "kln"){
      temperatura = (entradaTemp - 32) * 5/9 + 273.15; 
    } else {
      temperatura = entradaTemp;
    }
  }
  if(tipoConverter == "kln"){
    if(tipoPara == "celsius"){
      temperatura = entradaTemp - 273.15; 
    } else if (tipoPara == "fhr"){
      temperatura= (entradaTemp -273.15) * 9/5 + 32; 
    } else {
      temperatura = entradaTemp;
    }
  }
  document.querySelector('span').innerHTML = temperatura.toFixed(2);
}
  

