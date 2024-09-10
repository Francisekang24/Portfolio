document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const navItems = document.querySelectorAll('.navbar-item');
    const sections = document.querySelectorAll('.section');

    function toggleSection(targetId) {
        navItems.forEach(item => {
            const isTarget = item.getAttribute('data-target') === targetId;
            item.querySelector('input[type="radio"]').checked = isTarget;
            item.classList.toggle('active', isTarget);
        });

        sections.forEach(section => {
            section.style.display = section.id === targetId ? 'block' : 'none';
        });

        if (window.innerWidth <= window.innerHeight) {
            navbarLinks.classList.remove('active');
        }
    }

    navbarToggle.addEventListener('click', () => navbarLinks.classList.toggle('active'));

    navItems.forEach(item => {
        item.addEventListener('click', () => toggleSection(item.getAttribute('data-target')));
    });

    toggleSection('portfolio');
});