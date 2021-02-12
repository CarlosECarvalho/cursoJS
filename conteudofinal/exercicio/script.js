let num = document.getElementById("fnum")
let lista = document.querySelector ('select#flista')
let res = document.querySelector('div#res')
let valores = []
function ehNum (n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function emLista (n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
} 
function adicionar (){
    if (ehNum(num.value) && !emLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        num.value = ''
    } else {
        res.innerHTML = ('Valor inválido ou já encontrado!')
    }
num.focus()
}
function finalizar(){
    if (valores.length == 0){
        res.innerHTML= ('Adicione valores antes de finalizar!')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        let media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temo ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p>A media de todos os valores é ${media}</p>`
    }
}