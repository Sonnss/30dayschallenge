document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("challenge-container");
    const completedDays = JSON.parse(localStorage.getItem("completedDays")) || [];

    // Generate 30 boxes
    for (let i = 1; i <= 30; i++) {
        const box = document.createElement("div");
        box.className = "box";
        box.innerHTML = `
            <div class="day">Day ${i}</div>
            <div class="trophy">🏆</div>
        `;
        if (completedDays.includes(i)) {
            box.classList.add("completed");
            box.querySelector(".trophy").style.display = "block";
        }
        box.onclick = function () {
            completeChallenge(box, i);
        };
        container.appendChild(box);
    }

    checkCompletion();  // Check if the challenge is completed
});

function completeChallenge(element, day) {
    let completedDays = JSON.parse(localStorage.getItem("completedDays")) || [];
    if (!completedDays.includes(day)) {
        // Mark the box as completed
        element.classList.add('completed');
        element.querySelector('.trophy').style.display = 'block';

        completedDays.push(day);
        localStorage.setItem("completedDays", JSON.stringify(completedDays));

        checkCompletion(); // Check completion status after marking a challenge as completed
    }
}

function resetChallenge() {
    localStorage.removeItem("completedDays");
    document.querySelectorAll(".box").forEach(box => {
        box.classList.remove("completed");
        box.querySelector(".trophy").style.display = "none";
    });
    document.getElementById("congratulations").classList.add("hidden");
}

function checkCompletion() {
    const completedDays = JSON.parse(localStorage.getItem("completedDays")) || [];
    const congratulationsElement = document.getElementById("congratulations");

    // Show congratulations message only if all 30 days are completed
    if (completedDays.length === 30) {
        congratulationsElement.classList.remove("hidden");
    } else {
        congratulationsElement.classList.add("hidden");
    }
}