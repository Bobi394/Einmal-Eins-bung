let currentMultiplicand, currentMultiplier;

function startRandom() {
    // Zeige den Modus für zufällige Aufgaben
    document.getElementById("mode-selection").style.display = "none";
    const randomMode = document.getElementById("random-mode");
    randomMode.style.display = "block";
    randomMode.classList.add("show");
    nextRandomQuestion();
}

function nextRandomQuestion() {
    currentMultiplicand = Math.floor(Math.random() * 10) + 1;
    currentMultiplier = Math.floor(Math.random() * 10) + 1;
    document.getElementById("random-question").innerText = `${currentMultiplicand} x ${currentMultiplier} = ?`;
    document.getElementById("random-answer").value = "";
    document.getElementById("random-feedback").innerText = "";
}

function checkRandomAnswer() {
    const answer = parseInt(document.getElementById("random-answer").value);
    if (answer === currentMultiplicand * currentMultiplier) {
        document.getElementById("random-feedback").innerText = "Richtig!";
    } else {
        document.getElementById("random-feedback").innerText = `Falsch! Die richtige Antwort ist ${currentMultiplicand * currentMultiplier}.`;
    }
}

function chooseRow() {
    // Zeige den Modus für das Üben einer Reihe
    document.getElementById("mode-selection").style.display = "none";
    const rowMode = document.getElementById("row-mode");
    rowMode.style.display = "block";
    rowMode.classList.add("show");
}

function startRowPractice() {
    nextRowQuestion();
}

function nextRowQuestion() {
    const selectedRow = parseInt(document.getElementById("row-selection").value);
    currentMultiplier = Math.floor(Math.random() * 10) + 1;
    currentMultiplicand = selectedRow;
    document.getElementById("row-question").innerText = `${currentMultiplicand} x ${currentMultiplier} = ?`;
    document.getElementById("row-answer").value = "";
    document.getElementById("row-feedback").innerText = "";
}

function checkRowAnswer() {
    const answer = parseInt(document.getElementById("row-answer").value);
    if (answer === currentMultiplicand * currentMultiplier) {
        document.getElementById("row-feedback").innerText = "Richtig!";
    } else {
        document.getElementById("row-feedback").innerText = `Falsch! Die richtige Antwort ist ${currentMultiplicand * currentMultiplier}.`;
    }
}
