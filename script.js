// 1. Find the button using its ID
const dinnerButton = document.getElementById('myButton');

// 2. Add the click event listener
dinnerButton.addEventListener('click', function() {
    // 3. This line replaces EVERYTHING inside the <body> tags
    document.body.innerHTML = '<h1>This moment is a new start</h1>';
    
    // Optional: Add some style to the new text via JavaScript
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.textAlign = 'center';
});
