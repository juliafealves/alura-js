var trPacientes = document.getElementsByClassName('paciente');

percorreArray(trPacientes, function(trPacienteAtual){
    var paciente = montaPaciente(trPacienteAtual);
    trPacienteAtual.getElementsByClassName('info-imc')[0].textContent = paciente.getIMC();
});
