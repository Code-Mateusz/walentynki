function checkAnswer() {
    const correctAnswer = "Pizzeria Roma"; // Prawidłowa odpowiedź
    const userAnswer = document.getElementById("answer").value.trim();

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("puzzle").style.display = "none";
        document.getElementById("surprise").style.display = "block";
    } else {
        alert("Nie, spróbuj jeszcze raz!");
    }
}
