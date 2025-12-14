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

// Navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('#navbar a');

function setActiveNav() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - navbar.offsetHeight - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', setActiveNav);

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all timeline items and cards for animation
document.querySelectorAll('.timeline-item, .skill-card, .achievement-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add print functionality
function printCV() {
    window.print();
}

// Optional: Add a print button dynamically if needed
// You can uncomment this if you want a print button
/*
const printBtn = document.createElement('button');
printBtn.textContent = '🖨️ Print CV';
printBtn.style.cssText = `
    position: fixed;
    bottom: 90px;
    right: 30px;
    background-color: var(--accent-color);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    z-index: 999;
`;
printBtn.addEventListener('click', printCV);
printBtn.addEventListener('mouseenter', () => {
    printBtn.style.transform = 'translateY(-3px)';
    printBtn.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
});
printBtn.addEventListener('mouseleave', () => {
    printBtn.style.transform = 'translateY(0)';
    printBtn.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
});
document.body.appendChild(printBtn);
*/

console.log('CV Website loaded successfully!');