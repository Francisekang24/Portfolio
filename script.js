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

document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filters select');
    const workItems = document.querySelectorAll('.work-item');

    filters.forEach(filter => filter.addEventListener('change', () => {
        const selected = {
            software: document.getElementById('softwareFilter').value,
            type: document.getElementById('typeFilter').value,
            date: document.getElementById('dateFilter').value,
            context: document.getElementById('contextFilter').value
        };

        workItems.forEach(item => {
            const isVisible = (selected.software === 'all' || item.getAttribute('data-software') === selected.software) &&
                              (selected.type === 'all' || item.getAttribute('data-type') === selected.type) &&
                              (selected.date === 'all' || item.getAttribute('data-date') === selected.date) &&
                              (selected.context === 'all' || item.getAttribute('data-context') === selected.context);
            item.style.display = isVisible ? 'block' : 'none';
        });
    }));
});


