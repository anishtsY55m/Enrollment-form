document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission

    const privacyAgreement = document.getElementById('privacyAgreement');

    if (privacyAgreement.checked) {
        document.getElementById('enrollmentForm').style.display = 'none';
        document.getElementById('thankYouMessage').
