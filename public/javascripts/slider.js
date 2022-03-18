let time = 4000,
    imagemAtual = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length;

function proximaImagem() {

    images[imagemAtual]
        .classList.remove("selected")

    imagemAtual++

    if(imagemAtual >= max)
        imagemAtual = 0

    images[imagemAtual]
        .classList.add("selected")
}

function inicio() {
    setInterval(() => {
        // troca de image
        proximaImagem()
    }, time)
}

window.addEventListener("load", inicio)