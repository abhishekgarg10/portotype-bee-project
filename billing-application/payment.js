document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Placeholder for actual payment processing logic
    alert('Payment submitted successfully!');

    // Reset the form after submission
    this.reset();
});
