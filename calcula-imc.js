var botao = document.getElementById('calcula-imcs');
/**
 * Faz o cálculo de todos os IMCs da tabela.
 */
botao.addEventListener('click', function(){
    var trPacientes = document.getElementsByClassName('paciente');

    percorreArray(trPacientes, function (trPacienteAtual) {
        var paciente = montaPaciente(trPacienteAtual);
        trPacienteAtual.getElementsByClassName('info-imc')[0].textContent = paciente.getIMC();
    });
});
