function percorreArray(array, comportamento)
{
    for(var i = 0; i <= array.length; i++){
        var elementoAtual = array[i];
        comportamento(elementoAtual);
    }
}
