function completeChallenge(element) {
    // Mark the box as completed by adding a class
    element.classList.add('completed');
    // Show the trophy
    element.querySelector('.trophy').style.display = 'block';
}