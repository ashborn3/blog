document.getElementById('theme-toggle').addEventListener('click', changeMode);

function changeMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const themeIcon = document.getElementById('theme-icon');
    const cards = document.querySelectorAll('.card');

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    navbar.classList.toggle('navbar-dark-mode');
    navbar.classList.toggle('navbar-light-mode');

    // Toggle mode for each card
    cards.forEach(card => {
        card.classList.toggle('dark-mode');
        card.classList.toggle('light-mode');
    });

    // Change the icon based on the current mode
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    cards.forEach(card => {
        // If the body has 'dark-mode' class, add 'dark-mode' to the card and remove 'light-mode'
        if (document.body.classList.contains('dark-mode')) {
            card.classList.add('dark-mode');
            card.classList.remove('light-mode');
        } 
        // If the body has 'light-mode' class, add 'light-mode' to the card and remove 'dark-mode'
        else if (document.body.classList.contains('light-mode')) {
            card.classList.add('light-mode');
            card.classList.remove('dark-mode');
        }
    });
}