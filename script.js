function caregar(){
var msg = document.querySelector("#msg")
var img = document.querySelector("#imagem")
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são: ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src =  'manha1.jpg'
    document.body.style.background = '#f7c290'
} else if (hora >= 12 && hora <= 18){
    img.src = 'tarde.jpg'
    document.body.style.background = '#d98847'
} else {
    img.src = 'noite.jpg'
    document.body.style.background = '#223242'
}
}