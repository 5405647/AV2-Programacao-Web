function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    var res = document.getElementById(`res`)
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO] Verifique os dados e  tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute(`src`, `img/fotomenino.jpg`, `width`, `20`)
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute(`src`, `img/fotojovemh.jpg`)
            } else if (idade < 50) {
                // adulto
                img.setAttribute(`src`, `img/fotoadulto.jpg`)
            } else {
                // idoso
                img.setAttribute(`src`, `img/fotoidoso.jpg`)
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute(`src`, `img/fotomenina.jpg`)
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute(`src`, `img/fotojovemm.jpg`)
            } else if (idade < 50) {
                // adulto
                img.setAttribute(`src`, `img/fotoadulta.jpg`)
            } else {
                // idoso
                img.setAttribute(`src`, `img/fotoidosa.jpg`)
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Voce já é um(a) ${genero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}