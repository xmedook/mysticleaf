document.addEventListener('DOMContentLoaded', function () {
  const benefitItems = document.querySelectorAll('.benefit-item');

  benefitItems.forEach((item) => {
    const flipButton = item.querySelector('.flip-button');
    const closeButton = item.querySelector('.close-button');

    if (flipButton) {
      flipButton.addEventListener('click', function () {
        item.classList.add('is-flipped');
      });
    }

    if (closeButton) {
      closeButton.addEventListener('click', function () {
        item.classList.remove('is-flipped');
      });
    }
  });
});
