const form_adultos = document.querySelector('.adultos');
const mayor = document.getElementById('mayor');
const menor = document.getElementById('menor');

mayor.addEventListener('click', () => {
  form_adultos.classList.remove('oculto');
});

menor.addEventListener('click', () => {
  form_adultos.classList.add('oculto');
});