var agora = new Date()//consulta os dados de horario do sistema
var hora = agora.getHours();//consulta a hora do Date
console.log (`Agora são exetamente ${hora} horas`);
if( hora < 6){
    console.log(`É madrugada, vá dormir`);
}else if (hora < 12){
    console.log(`Bom dia!`);
}else if(hora <= 18){
    console.log(`Boa tarde!`);
}else {
    console.log(`Boa noite!`);
}