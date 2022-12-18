/* Definindo o Scripting */

var $tdTotalCursos = document.querySelector('.js-total-de-cursos');
var $tdTotalDeHoras = document.querySelector('.js-total-de-horas');
var $buttonConfirmar = document.querySelector('.js-botao-matricula');
var totalHoras = 0;
var totalCursos = 0;


function adicionaCurso(checkbox) {
    if (checkbox.checked) {
        totalCursos++;
        totalHoras += parseInt(checkbox.value);
    } else {
        totalCursos--;
        totalHoras -= parseInt(checkbox.value);
    }
    $tdTotalDeHoras.textContent = totalHoras + 'h';
    $tdTotalCursos.textContent = totalCursos + 'curso(s)';
}

$buttonConfirmar.onclick = confirmarMatriculas;

function confirmarMatriculas() {
    if (totalCursos === 0) {
        alert('Nenhum curso selecionado');
    } else {
        alert('Matricula confirmada nos cursos!')
        window.location.href = 'index.html';
    }
}

