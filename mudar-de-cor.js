var trs = document.getElementsByTagName('tr');
percorreArray(trs, function(tr){
    tr.addEventListener('mouseover', function(){
        tr.setAttribute('bgcolor', '#E1E6FF');
    });
    tr.addEventListener('mouseout', function(){
        tr.setAttribute('bgcolor', 'white');
    });
});