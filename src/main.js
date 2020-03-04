
let myForm = document.querySelector('#my-form');

let msg = document.querySelector('.msg');

let valorFinal = document.querySelector('#valorFinal');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  
  
  let valorProjeto = parseInt(document.querySelector('#valorProjeto').value);
  let horasTrabDia = parseInt(document.querySelector('#horasTrabDia').value);
  let diasTrab = parseInt(document.querySelector('#diasTrab').value);
  let diasFerias = parseInt(document.querySelector('#diasFerias').value);
  
  let valorHora = (valorProjeto / (diasTrab * 4 * horasTrabDia) ) + ( ( diasFerias * diasTrab * horasTrabDia ) );
  
  valorFinal.appendChild(document.createTextNode(valorHora.toFixed(2)));

  //Limpar os campos apos envio
  document.querySelector('#my-form').reset();
  
}