// modeButton.js

document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    navbar.classList.toggle('navbar-dark-mode');
    navbar.classList.toggle('navbar-light-mode');

    // Change the icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
});
