var trPacientes = document.getElementsByClassName('paciente');

for(var posicaoAtual = 0; trPacientes.length - 1; posicaoAtual++){
  var nome = trPacientes[posicaoAtual].getElementsByClassName('info-nome')[0].textContent;
  var peso = trPacientes[posicaoAtual].getElementsByClassName('info-peso')[0].textContent;
  var altura = trPacientes[posicaoAtual].getElementsByClassName('info-altura')[0].textContent;

  var paciente = {
                  nome    : nome,
                  peso    : peso,
                  altura  : altura
                };

  if(paciente.altura > 0){
    var imc = paciente.peso / (paciente.altura * paciente.altura);
    trPacientes[posicaoAtual].getElementsByClassName('info-imc')[0].textContent = imc;
  }else{
    console.log("Não foi possível calcular o IMC, pois a altura não é um valor válido");
  }
}
