document.addEventListener('DOMContentLoaded', function () {
    const adjustResolutionBtn = document.getElementById('adjustResolutionBtn');
    const imageAdjustorContainer = document.getElementById('imageAdjustorContainer');
    const imageInput = document.getElementById('imageInput');
    const resolutionSlider = document.getElementById('resolutionSlider');
    const image = document.getElementById('image');
    const resolutionValue = document.getElementById('resolutionValue');
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const body = document.body;

    adjustResolutionBtn.addEventListener('click', function () {
        document.querySelector('.intro').style.display = 'none';
        imageAdjustorContainer.style.display = 'flex';
    });

    imageInput.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                image.src = e.target.result;
                adjustResolution();
            };
            reader.readAsDataURL(file);
        }
    });

    resolutionSlider.addEventListener('input', function () {
        adjustResolution();
    });

    function adjustResolution() {
        const resolution = resolutionSlider.value;
        image.style.width = `${resolution}px`;
        resolutionValue.textContent = `${resolution}px`;
    }

    toggleThemeBtn.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleThemeBtn.textContent = 'Switch to Dark Mode';
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleThemeBtn.textContent = 'Switch to Light Mode';
        }
    });

    // Initialize with light mode
    body.classList.add('light-mode');
});
