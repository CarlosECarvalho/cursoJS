function contar(){
    var ini = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let  res = document.getElementById('res');
    if (ini.value.length == 0 || passo.value.length == 0 ){
        res.innerHTML = '[ERRO] Dados incompletos';
    }else{
        res.innerHTML = 'Contando...<BR>';
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if ( p <= 0){
            alert('Passo inválido. Considerando passo 1')
            p=1
        }
        if (i < f) {
            for (let c =i; c <= f; c+=p){
            res.innerHTML += `${c} \u{1f449}`
        }
    } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
}
}