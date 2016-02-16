var botao = document.querySelector('#adicionar-paciente');
botao.addEventListener('click', function(event){
    event.preventDefault();

    var inputNome   =   document.querySelector('#campo-nome');
    var inputPeso   =   document.querySelector('#campo-peso');
    var inputAltura =   document.querySelector('#campo-altura');

    var imc = inputPeso.value / (inputAltura.value * inputAltura.value);

    var novoPaciente =  "<tr class='paciente'>" +
                        "<td class='info-nome'>" + inputNome.value + "</td>" +
                        "<td class='info-peso'>" + inputPeso.value + "</td>" +
                        "<td class='info-altura'>" + inputAltura.value + "</td>" +
                        "<td class='info-imc'>" + imc + "</td></tr>";

    var table = document.querySelector('table');
    table.innerHTML += novoPaciente;

    /**
     * Limpa o formulário
     */
    inputNome.value     = "";
    inputPeso.value     = "";
    inputAltura.value   = "";
});
