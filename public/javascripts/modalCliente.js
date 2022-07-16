const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}



document.querySelectorAll('.AdicionarCadPet')
    .forEach((element) => element.addEventListener('click', openModal))
document.getElementById('modalClose')
    .addEventListener('click', closeModal)



    const openModalRelatorio = () => document.getElementById('modalRelatorio')
    .classList.add('active')

const closeModalRelatorio = () => {
    document.getElementById('modalRelatorio').classList.remove('active')
}


document.querySelectorAll('#Relatorio').forEach((element) => element.addEventListener('click', openModalRelatorio))

document.getElementById('modalCloseRelatorio')
    .addEventListener('click', closeModalRelatorio)