let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0; 
console.log(randomNumber);

function checkGuess() {
    let userGuess = Number(document.getElementById("Number").value); 
    let feedback = document.getElementById("feedback");
    attempts++; 

    let difference = Math.abs(userGuess - randomNumber);

    if (userGuess == randomNumber) {
        feedback.textContent = `🎉 Excellent! You nailed it in ${attempts} attempt(s)!`;
        feedback.style.color = "green";
    } else if (userGuess < randomNumber) {
        if (difference >= 20) {
            feedback.textContent = "❄️ Way too low! Try a much higher number.";
        } else {
            feedback.textContent = "⬆️ A bit too low. Try guessing slightly higher.";
        }
        feedback.style.color = "red";
    } else {
        if (difference >= 20) {
            feedback.textContent = "🔥 Way too high! Try a much lower number.";
        } else {
            feedback.textContent = "⬇️ A bit too high. Try guessing slightly lower.";
        }
        feedback.style.color = "red";
    }
    
}
