window.onload = function() {
    
    // Initialize nav link active
    var navLinks = document.querySelectorAll('.nav-link');
    var currentPath = window.location.pathname;
    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
        else {
            link.classList.remove('active');
        }
    });

    // Activate nav link on click
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
}