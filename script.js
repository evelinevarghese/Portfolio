document.addEventListener('DOMContentLoaded', function () {
    // Function to animate progress bars
    function animateProgressBar() {
        const progressBars = document.querySelectorAll('.skill-bar');

        progressBars.forEach((bar) => {
            const progressValue = bar.getAttribute('data-progress');
            bar.style.width = progressValue;
        });
    }

    // Call the function when the DOM is loaded
    animateProgressBar();
});
