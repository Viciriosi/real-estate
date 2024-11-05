document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Collect form data
    const username = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Prepare data to send
    const data = { username, password, email };

    // Send data to the backend using Fetch API
    fetch('/add-user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(message => {
        // Handle the response from the server (e.g., show a success message)
        alert(message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
