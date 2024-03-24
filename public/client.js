// public/client.js

document.addEventListener('DOMContentLoaded', function () {
    // Logic for marking habits as done, not done, or none
    const habitForm = document.querySelector('#habit-form');
    if (habitForm) {
        habitForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(habitForm);
            const habitId = habitForm.dataset.id;
            fetch(`/habits/${habitId}`, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle response data if needed
                console.log(data);
                // Redirect or update UI accordingly
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
        });
    }

    // Logic for marking today's habit
    const todayForm = document.querySelector('#today-form');
    if (todayForm) {
        todayForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(todayForm);
            const habitId = todayForm.dataset.id;
            fetch(`/habits/${habitId}/today`, {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Handle response data if needed
                console.log(data);
                // Redirect or update UI accordingly
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
        });
    }
});
