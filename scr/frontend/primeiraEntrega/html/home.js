document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.dropdown');
    var dropdownMenu = document.querySelector('.dropdown-menu');

    dropdownMenu.style.display = 'none';

    dropdown.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block'; // Mostra o menu dropdown
    });

    dropdown.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none'; // Esconde o menu dropdown
    });
});

document
    .getElementById("construcao")
    .addEventListener("click", function () {
        alert("Páginas em construção! Aguarde. ");
    });
