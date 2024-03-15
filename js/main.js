document.addEventListener('DOMContentLoaded', (e) => {
    window.scrollTo(0,0);
})

window.scroll({
    behavior: 'smooth'
})
let section_sobre = document.getElementById('sobre');
let section_habilidades = document.getElementById('habilidades');
let section_projetos = document.getElementById('projetos');
let section_contato = document.getElementById('contato');

let btn_sobre = document.getElementById('goToSobre');
btn_sobre.addEventListener('click', (e) => {
    section_sobre.scrollIntoView({behavior: 'smooth', block:'start'});
});