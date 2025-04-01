function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector ('div#res')
if (fano.value.length == 0 || Number (fano.value) > ano) {
    window.alert('[Erro] Verifique os dados e tente novamente!')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
        gênero = 'homem'
    if(idade >=0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'foto-criança menina. png')
        } else if (idade >= 10 && idade <21) {
            //jovem
            img.setAttribute('src', 'foto-criança. png')
        } else if (idade <50) {
            //Adutlto
            img.setAttribute('src', 'foto-jovem. png')
} else {
    //Idoso
}
    } else if (fsex[1].checked) {
        gênero = 'mulher'
        if (idade >=0 && idade <10) {
            //Criança
        } else if (idade >= 10 && idade <21) {
            //jovem
        } else if (idade <50) {
            //Adutlto
} else {
    //Idoso
           }

}
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
