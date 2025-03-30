var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem)
//if(diaSem ==0){
 //   console.log('Domingo')
//} if(diaSem ==1){                //PODEMOS FAZER DESTA FORMA TAMBEM
//    console.log('segunda')
//}
//if(diaSem ==2){
//    console.log('Terça')
//}

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
        case 1:
        console.log('Segunda')
        break
        case 2:
        console.log('Terça')
        break
        case 3: 
        console.log('Quarta')
        break
        case 4:
        console.log('Quinta')
        break
        case 5:
        console.log('Sexta')
        break
        case 6: 
        console.log('sabado')
}