// Limpeza
$(".barra-inicial").remove()
$("#cabecalho > div.conteiner > div.row-fluid > div:nth-child(1) > div.superior.row-fluid").remove()
$("#cabecalho > div.conteiner > div.row-fluid > div:nth-child(3) > div.superior.row-fluid").remove()
$("#cabecalho > div.conteiner > div.row-fluid > div:nth-child(3) > div.inferior.row-fluid > div > div > a > span:nth-child(3)").remove()
$("#cabecalho > div.conteiner > div.row-fluid > div:nth-child(3) > div.superior.row-fluid > div > ul > li > a").remove()

if (modulo_tarja_texto) {
    cab = $("#cabecalho")
    tarja_text = []
    tarja_text = modulo_tarja_texto.split(modulo_cupom)
    cab.prepend('<div class="modulo_tarja"><i class="top-icon1"></i>' + tarja_text[0] + ' <span> ' + modulo_cupom + ' </span> ' + tarja_text[1] + '<i class="top-icon2"></i></div>');
}
cart = $("#cabecalho > div.conteiner > div.row-fluid > div:nth-child(3) > div > div > div > a")
cart.$(">i").removeClass().addClass("j-cart")
cart($("").removeClass())