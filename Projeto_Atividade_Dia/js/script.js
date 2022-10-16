function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    

    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
        img.src = 'assets/manha.png'
        document.body.style.background = 'blue'
        //BOM DIA 
    } else if (hora >=12 && hora <=18) {
        img.src= 'assets/tarde.png'
        document.body.style.background = 'orange'
        //BOA TARDE
    } else {
        //BOA NOITE
        img.src= 'assets/noite.png'
        document.body.style.background = 'black'
    }
}

