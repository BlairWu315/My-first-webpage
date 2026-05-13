// This line finds the button in your HTML using the ID "myButton"
const dinnerButton = document.getElementById('myButton');

// This part waits for the click and then shows the message
dinnerButton.addEventListener('click', function() {
    alert('have a nice day!');
});