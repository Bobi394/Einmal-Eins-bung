let currentMultiplicand, currentMultiplier;

function startRandom() {
    // Verstecke das Hauptmenü und zeige den Modus für zufällige Aufgaben
    document.getElementById("mode-selection").style.display = "none";
    const randomMode = document.getElementById("random-mode");
    randomMode.style.display = "block";
    randomMode.classList.add("show");
    nextRandomQuestion();  // Generiere sofort eine neue zufällige Aufgabe
}

function nextRandomQuestion() {
    // Generiere eine zufällige Aufgabe
    currentMultiplicand = Math.floor(Math.random() * 20) + 1;  // Zufällige Zahl zwischen 1 und 20
    currentMultiplier = Math.floor(Math.random() * 10) + 1;    // Zufällige Zahl zwischen 1 und 10
    document.getElementById("random-question").innerText = `${currentMultiplicand} x ${currentMultiplier} = ?`;
    document.getElementById("random-answer").value = "";        // Setze das Antwortfeld zurück
    document.getElementById("random-feedback").innerText = "";  // Setze das Feedback zurück
}

function checkRandomAnswer() {
    // Überprüfe die Antwort für die zufällige Aufgabe
    const answer = parseInt(document.getElementById("random-answer").value);
    if (answer === currentMultiplicand * currentMultiplier) {
        document.getElementById("random-feedback").innerText = "Richtig!";
    } else {
        document.getElementById("random-feedback").innerText = `Falsch! Die richtige Antwort ist ${currentMultiplicand * currentMultiplier}.`;
    }
}

function chooseRow() {
    // Verstecke das Hauptmenü und zeige den Modus für das Üben einer spezifischen Reihe
    document.getElementById("mode-selection").style.display = "none";
    const rowMode = document.getElementById("row-mode");
    rowMode.style.display = "block";
    rowMode.classList.add("show");
}

function startRowPractice() {
    // Starte die Übung für die ausgewählte Reihe
    nextRowQuestion();  // Generiere sofort die erste Aufgabe der ausgewählten Reihe
}

function nextRowQuestion() {
    // Generiere eine Aufgabe für die ausgewählte Reihe
    const selectedRow = parseInt(document.getElementById("row-selection").value);
    currentMultiplier = Math.floor(Math.random() * 10) + 1;    // Zufällige Zahl zwischen 1 und 10
    currentMultiplicand = selectedRow;                         // Der Multiplikand ist die ausgewählte Reihe
    document.getElementById("row-question").innerText = `${currentMultiplicand} x ${currentMultiplier} = ?`;
    document.getElementById("row-answer").value = "";          // Setze das Antwortfeld zurück
    document.getElementById("row-feedback").innerText = "";    // Setze das Feedback zurück
}

function checkRowAnswer() {
    // Überprüfe die Antwort für die ausgewählte Reihe
    const answer = parseInt(document.getElementById("row-answer").value);
    if (answer === currentMultiplicand * currentMultiplier) {
        document.getElementById("row-feedback").innerText = "Richtig!";
    } else {
        document.getElementById("row-feedback").innerText = `Falsch! Die richtige Antwort ist ${currentMultiplicand * currentMultiplier}.`;
    }
}

// Funktion zum Zurückkehren zum Hauptmenü
function goBackToMenu() {
    document.getElementById("random-mode").style.display = "none";  // Verstecke den Zufallsmodus
    document.getElementById("row-mode").style.display = "none";     // Verstecke den Reihenmodus
    document.getElementById("mode-selection").style.display = "block";  // Zeige das Hauptmenü
}