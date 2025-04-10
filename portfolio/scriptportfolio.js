const images = document.querySelectorAll('.expandable');
images.forEach(image => {
    image.addEventListener('click', function() {
        // Toggle the "expanded" class on the clicked image
        image.classList.toggle('expanded');
    });
});