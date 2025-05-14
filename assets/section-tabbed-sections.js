document.addEventListener('DOMContentLoaded', function () {
  const tabbedSections = document.querySelectorAll('.tabbed-sections');

  tabbedSections.forEach(function (section) {
    const tabLinks = section.querySelectorAll('.tab-link');
    const tabPanes = section.querySelectorAll('.tab-pane');

    // Activate the first tab by default
    if (tabLinks.length > 0 && tabPanes.length > 0) {
      tabLinks[0].classList.add('active');
      tabPanes[0].classList.add('active');
    }

    tabLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove active class from all links and panes
        tabLinks.forEach(function (item) {
          item.classList.remove('active');
        });
        tabPanes.forEach(function (item) {
          item.classList.remove('active');
        });

        // Add active class to the clicked link and corresponding pane
        const targetTab = this.getAttribute('data-tab');
        section.querySelector(`.tab-pane#${targetTab}`).classList.add('active');
        this.classList.add('active');
      });
    });
  });
});
