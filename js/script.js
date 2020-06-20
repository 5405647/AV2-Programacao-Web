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

// texto animado
var novmsg = "";
var i = 0;
var linha = 1;
var tempo = null;
var msg = " ";

function txtfull() {}
var txtcorpo = new txtfull();

txtcorpo[1] = "Confira também nossas ofertas diárias,"
txtcorpo[2] = "venha nos visitar.  "
txtcorpo[3] = "Estamos no primeiro andar do Caxias Shopping,   "
txtcorpo[4] = "venha nos conhecer.  "
txtcorpo[5] = "Para maiores informações ligue: (21) 2121-2121.   "
txtcorpo[6] = "NÃO ACREDITO QUE VOCÊ VAI FICAR FORA DESSA!"
txtcorpo[7] = "FASTFOOD FITNESS!   "
txtcorpo[8] = "  Sempre cuidando de você!!!"

var txtpt = 1;
var txtcon = 8;
var veloc = 200;
var txttr = 4;
var delay = veloc;
var r = 0;
var cr = "\r\n"
if ("3" <= navigator.appVersion.charAt(0)) {
    var cr = "\n"
}
for (x = 1; x <= (txtcon); x++) {
    txtcorpo[x] = txtcorpo[x] + cr;
}
msg = txtcorpo[1];

function msgtxt() {
    if (msg.length <= i || msg.charAt(i) == "\f") {
        r = i;
        i = 0;
        txtexe();
    }
    novmsg = novmsg + msg.charAt(i);
    i++;
    if (msg.charAt(i) == "\f" || (linha == txttr && i == msg.length)) {
        delay = 4000;
    } else {
        if (msg.charAt(i) == cr && msg != " " + cr) {
            delay = 2000;
        } else {
            delay = veloc;
        }
    }
    self.document.forms[0].elements[0].value = novmsg;
    tempo = setTimeout("msgtxt()", delay);
}

function txtexe() {
    txtpt++;
    if (txtcon < txtpt) {
        txtpt = 1;
    }
    linha++;
    if (txttr < linha || msg.charAt(r) == "\f") {
        novmsg = txtcorpo[txtpt].charAt(i);
        i++;
        linha = 1;
    }
    msg = txtcorpo[txtpt];
}

// 
function relbio() {
    hoje = new Date()
    aniv = new Date(document.live.age.value)
    idade = (hoje.getTime() - aniv.getTime());
    segtemid = idade / 1000;
    segundo = Math.floor(segtemid);
    mspordia = 24 * 60 * 60 * 1000;
    idade = (hoje.getTime() - aniv.getTime());
    diapss = idade / mspordia;
    diaspsd = Math.floor(diapss);
    horasps = (diapss - diaspsd) * 24;
    hrpsd = Math.floor(horasps);
    minpsd = Math.floor((horasps - hrpsd) * 60);
    document.live.time1.value = diaspsd
    document.live.time2.value = hrpsd
    document.live.time3.value = minpsd
    window.status = "Total de " + segundo + "............ segundos de vida.";
    timerID = setTimeout("relbio()", 1000)
}