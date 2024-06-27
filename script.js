document.getElementById('submit').addEventListener('click', function() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const questionSection = document.getElementById('question-section');
    const question = document.getElementById('question');

    if (question.textContent === "Para iniciar esta aventura: Quando começamos a conversar? - digite a data sem espaçamentos. ex. 01012024 caso tenha sido primeiro de janeiro de 2024." && answer === "24022024") {
        question.textContent = "Como foi nosso primeiro encontro?";
        document.getElementById('answer').value = '';
    } else if (question.textContent === "Como foi nosso primeiro encontro?" && answer === "incrível") {
        question.textContent = "Quer namorar comigo?";
        document.getElementById('answer').value = '';
        document.getElementById('submit').textContent = 'Sim';
    } else if (question.textContent === "Quer namorar comigo?" && answer === "sim") {
        questionSection.innerHTML = "<p>Eu te amo! Vamos namorar!</p>";
    } else {
        alert('Resposta errada, tente novamente!');
        document.getElementById('answer').value = '';
    }
});
