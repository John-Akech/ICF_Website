// Validate sighting report form
const sightingForm = document.querySelector('#sightingForm');
if (sightingForm) {
    sightingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform validation logic here
        let location = document.querySelector('#location').value.trim();
        let date = document.querySelector('#date').value.trim();
        let details = document.querySelector('#details').value.trim();

        if (location === '' || date === '' || details === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Submit form if validation passes
        this.submit();
    });
}

// Validate danger report form
const dangerForm = document.querySelector('#dangerForm');
if (dangerForm) {
    dangerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Perform validation logic here
        let location = document.querySelector('#location').value.trim();
        let date = document.querySelector('#date').value.trim();
        let details = document.querySelector('#details').value.trim();

        if (location === '' || date === '' || details === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Submit form if validation passes
        this.submit();
    });
}