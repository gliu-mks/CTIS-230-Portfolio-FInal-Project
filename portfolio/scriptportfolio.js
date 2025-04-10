const images = document.querySelectorAll('.expandable');
images.forEach(image => {
    image.addEventListener('click', function() {
        image.classList.toggle('expanded');
    });
});