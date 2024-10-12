// Preenche os campos de data e hora automaticamente ao carregar a página
window.onload = function() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = data.getFullYear();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    document.getElementById('data').value = `${dia}/${mes}/${ano}`;
    document.getElementById('hora').value = `${horas}:${minutos}:${segundos}`;
};

// Evento de submissão do formulário
document.getElementById('questionario').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    if (nome === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    const intensidade = parseInt(document.querySelector('input[name="intensidade"]:checked').value);
    const duracao = parseInt(document.querySelector('input[name="duracao"]:checked').value);
    const impacto = parseInt(document.querySelector('input[name="impacto"]:checked').value);
    const sintomas = document.querySelectorAll('input[name="sintomas"]:checked');
    
    let sintomasCount = 0;
    sintomas.forEach(sintoma => {
        sintomasCount += parseInt(sintoma.value);
    });

    // Cálculo do nível de enxaqueca
    const nivel = intensidade + duracao + impacto + sintomasCount;

    let resultado = '';
    if (nivel <= 3) {
        resultado = 'Nível 1: Leve - Sua dor de cabeça é leve.';
    } else if (nivel <= 6) {
        resultado = 'Nível 2: Moderada - Sua dor de cabeça é moderada.';
    } else if (nivel <= 9) {
        resultado = 'Nível 3: Grave - Sua dor de cabeça é grave.';
    } else {
        resultado = 'Nível 4: Crônica - Você pode estar enfrentando enxaqueca crônica.';
    }

    // Exibir o resultado com o nome do usuário
    document.getElementById('resultado').innerHTML = `<strong>${nome}</strong>, ${resultado}`;
});

// Modal functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("infoBtn");
const span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, abre o modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Função para salvar a página em PDF
document.getElementById('downloadPdf').addEventListener('click', function () {
    // Seleciona o conteúdo que será convertido em PDF
    const elemento = document.getElementById('conteudo');

    // Opções para o PDF
    const opcoes = {
        margin:       0.5,
        filename:     'MigraCheck_Resultados.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Gera o PDF e faz o download
    html2pdf().set(opcoes).from(elemento).save();
});
