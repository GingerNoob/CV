// Scroll to Top Button Functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// PDF Download Functionality - Simple print fallback
const downloadPdfBtn = document.getElementById('downloadPdfBtn');

downloadPdfBtn.addEventListener('click', () => {
    // For now, use print functionality as it's more reliable
    // In a production environment, you could integrate with a PDF service
    window.print();
});