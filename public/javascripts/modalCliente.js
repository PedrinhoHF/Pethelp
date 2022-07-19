// Modal Adicionar PET

const openModal = () =>
  document.getElementById("modal").classList.add("active");

const closeModal = () => {
  document.getElementById("modal").classList.remove("active");
};

document
  .querySelectorAll(".AdicionarCadPet")
  .forEach((element) => element.addEventListener("click", openModal));
document.getElementById("modalClose").addEventListener("click", closeModal);



// Modal Remarcar Consulta

const openModalAgenda = () =>
  document.getElementById("modal-agenda").classList.add("active");

const closeModalAgenda = () => {
  document.getElementById("modal-agenda").classList.remove("active");
};

document
  .querySelectorAll("#Remarcar")
  .forEach((element) => element.addEventListener("click", openModalAgenda));
document.getElementById("modalCloseAgenda").addEventListener("click", closeModalAgenda);

// Modal Nova Consulta

const openModalNovaConsulta = () =>
  document.getElementById("modalNovaConsulta").classList.add("active");

const closeModalNovaConsulta = () => {
  document.getElementById("modalNovaConsulta").classList.remove("active");
};

document
  .querySelectorAll(".AgendarConsulta-btn")
  .forEach((element) => element.addEventListener("click", openModalNovaConsulta));
document.getElementById("modalCloseNovaConsulta").addEventListener("click", closeModalNovaConsulta);






// Modal Relatorio 

const openModalRelatorio = () =>
  document.getElementById("modalRelatorio").classList.add("active");

const closeModalRelatorio = () => {
  document.getElementById("modalRelatorio").classList.remove("active");
};

document
  .querySelectorAll("#Relatorio")
  .forEach((element) => element.addEventListener("click", openModalRelatorio));

document
  .getElementById("modalCloseRelatorio")
  .addEventListener("click", closeModalRelatorio);
