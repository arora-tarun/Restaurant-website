
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    if (name && date && time && people) {
        // Show the confirmation message
        document.getElementById('confirmationMessage').classList.remove('hidden');

        // Optionally, clear the form
        document.getElementById('bookingForm').reset();
    } else {
        alert("Please fill in all the fields.");
    }
});
