

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
}


document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)




    const openModalRelatorio = () => document.getElementById('modalRelatorio')
    .classList.add('active')

const closeModalRelatorio = () => {
    document.getElementById('modalRelatorio').classList.remove('active')
}


document.getElementById('Relatorio')
    .addEventListener('click', openModalRelatorio)

document.getElementById('modalCloseRelatorio')
    .addEventListener('click', closeModalRelatorio)
   


