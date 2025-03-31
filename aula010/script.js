function carregar () {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date ()
var hora = data.getHours
msg.innerHTML = 'agora são ${hora} horas.'
if (hora >= 0 && hora <12) {
    // Bom Dia!
    img.src ='manha.png'
} else if (hora >= 12 && hor <18){
    img.src = 'tarde.png'
    // Boa Tarde
} else {
    img.src = 'noite.png'
    // Boa Noite
}


}
