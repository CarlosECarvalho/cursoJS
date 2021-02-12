function parimpar(n){
    if (n%2 == 0){
        return "Par!"
    } else {
        return "Impar!"
    }
} //funcao simples com um parametro
function soma (n1=0, n2=0) {
    return n1 + n2
} //funcao com 2 parametros e com valor padrao para eles
let mult = function(x) {
    return x*2
} //funcao inserida em uma variavel
console.log(parimpar( mult(soma(13,))))
//funcao que recebe como parametro o retorno de uma funcao de variavel, que recebe como parametro o retorno de uma funcao.
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial (n-1)
    }
}
//funcao recursiva
console.log(fatorial(11))


