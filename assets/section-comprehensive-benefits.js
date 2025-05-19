document.addEventListener('DOMContentLoaded', function () {
  const benefitItems = document.querySelectorAll('.benefit-item');

  benefitItems.forEach((item) => {
    const innerItem = item.querySelector('.benefit-item-inner'); // Get the inner item
    // const closeButton = item.querySelector('.close-button'); // Close button removed from Liquid

    // Add click listener to the innerItem for flipping and console log
    if (innerItem) {
      innerItem.addEventListener('click', function(event) {
        console.log('benefit-item-inner clicked');
        // Toggle flip on the parent item
        item.classList.toggle('is-flipped');
      });
    }

    // Remove the separate close button listener as the button is removed
    // if (closeButton) {
    //   closeButton.addEventListener('click', function () {
    //     item.classList.remove('is-flipped');
    //   });
    // }
  });

  // Add accessibility support
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      const flippedItems = document.querySelectorAll('.benefit-item.is-flipped');
      flippedItems.forEach(item => {
        item.classList.remove('is-flipped');
      });
    }
  });
});
