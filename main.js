const clique = document.querySelector("#interieur");
const apparaitre = document.querySelector("#apparaitre");
const couleur = document.querySelector("#flèche");
const interieur = document.querySelector("#interieur");



clique.addEventListener('click', () => {

    apparaitre.classList.toggle('visible');
    couleur.classList.toggle('change');
    interieur.classList.toggle('change2');

});