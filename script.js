document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    const showcase = document.querySelector('.showcase');

    images.forEach(image => {
        image.addEventListener('click', function() {
            // Clear the showcase div
            showcase.innerHTML = '';

            // Clone the clicked image
            const clonedImage = image.cloneNode(true);
            clonedImage.classList.add('showcase-image'); // Add class to cloned image

            // Create a div to hold the image and text
            const container = document.createElement('div');

            // Create a paragraph for the lorem text
            const loremText = document.createElement('p');
            loremText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

            // Append the cloned image and lorem text to the container
            container.appendChild(clonedImage);
            container.appendChild(loremText);

            // Append the container to the showcase div
            showcase.appendChild(container);
        });
    });
});