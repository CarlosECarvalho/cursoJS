let num = [5,8,9,12,3]
/*num[5] = 11
num.push(6)
console.log (`Nosso vetor é ${num}`)
console.log (num.length)
num.sort()
console.log (num)

for (let pos=0; pos < num.length; pos++){
    console.log(num[pos])
}
*/

for(let pos in num){
    console.log (num[pos])
}
 console.log(`O número 3 está na posição ${num.indexOf(3)+1}`)