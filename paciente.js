function montaPaciente(trPacienteAtual){
    var nome = trPacienteAtual.getElementsByClassName('info-nome')[0].textContent;
    var peso = trPacienteAtual.getElementsByClassName('info-peso')[0].textContent;
    var altura = trPacienteAtual.getElementsByClassName('info-altura')[0].textContent;

    var paciente = {
        nome    : nome,
        peso    : peso,
        altura  : altura,
        getIMC  : function(){
            if(this.altura > 0){
                return this.peso / (this.altura * this.altura);
            }else{
                console.log("Não foi possível calcular o IMC, pois a altura não é um valor válido");
            }
        }
    };

    return paciente;
}