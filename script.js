
function soma(){
  let numero = document.getElementById('numero');
  let numero2 = document.getElementById('numero2');
  let resultado = document.getElementById('resultado');
        
  let num1 = Number(numero.value);
  let num2 = Number(numero2.value);
  let soma = (num1 + num2);
  resultado.innerHTML = `O valor da soma: ${soma}`;
}
        
function subt(){
  let numero = document.getElementById('numero');
  let numero2 = document.getElementById('numero2');
  let resultado = document.getElementById('resultado');
        
  let num1 = Number(numero.value);
  let num2 = Number(numero2.value);
  let soma = (num1 - num2);
  resultado.innerHTML = `O valor da subtração: ${soma}`;
}
        
function multi(){
  let numero = document.getElementById('numero');
  let numero2 = document.getElementById('numero2');
   let resultado = document.getElementById('resultado');
        
  let num1 = Number(numero.value);
  let num2 = Number(numero2.value);
  let soma = num1 * num2;
  resultado.innerHTML = `O valor da multiplicação: ${soma}`;
}
        
function div(){
  let numero = document.getElementById('numero');
  let numero2 = document.getElementById('numero2');
  let resultado = document.getElementById('resultado');
        
  let num1 = Number(numero.value);
  let num2 = Number(numero2.value);
  let soma = num1 / num2;
  resultado.innerHTML = `O valor da divisão: ${soma}`;
}