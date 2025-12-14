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

// Smooth scroll for navigation links
document.querySelectorAll('.nav-output a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const targetPosition = targetSection.offsetTop - 100;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Typing effect for the initial cursor
const cursor = document.querySelector('.cursor');
if (cursor) {
    cursor.classList.add('blink');
}

// Terminal text typing animation on load (optional enhancement)
document.addEventListener('DOMContentLoaded', () => {
    // Add slight fade-in for sections
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});

// Easter egg: Konami code (up, up, down, down, left, right, left, right, b, a)
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        triggerMatrixEffect();
    }
});

function triggerMatrixEffect() {
    const body = document.body;
    const originalBg = body.style.backgroundColor;
    
    // Create matrix rain effect
    body.style.backgroundColor = '#000';
    
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #00ff00;
        font-size: 2rem;
        z-index: 10000;
        text-align: center;
        animation: pulse 1s infinite;
    `;
    message.textContent = '🎮 KONAMI CODE ACTIVATED! 🎮\n\nYou found the easter egg!';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
        body.style.backgroundColor = originalBg;
        konamiCode = [];
    }, 3000);
}

// Add matrix-style falling characters effect (subtle background animation)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.1;
    `;
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(12, 12, 12, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff00';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment to enable subtle matrix rain background effect
// createMatrixRain();

// Print CV function
function printCV() {
    window.print();
}

// Keyboard shortcut: Ctrl/Cmd + P to print
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        printCV();
    }
});

console.log('%c███████╗██╗   ██╗ ██████╗ ██╗  ██╗', 'color: #00ff00; font-family: monospace;');
console.log('%c██╔════╝██║   ██║██╔════╝ ██║  ██║', 'color: #00ff00; font-family: monospace;');
console.log('%c███████╗██║   ██║██║  ███╗███████║', 'color: #00ff00; font-family: monospace;');
console.log('%c╚════██║██║   ██║██║   ██║██╔══██║', 'color: #00ff00; font-family: monospace;');
console.log('%c███████║╚██████╔╝╚██████╔╝██║  ██║', 'color: #00ff00; font-family: monospace;');
console.log('%c╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝', 'color: #00ff00; font-family: monospace;');
console.log('%cCharlie Bates CV Terminal v1.0', 'color: #5fd700; font-weight: bold;');
console.log('%cTry the Konami Code for a surprise! ⬆⬆⬇⬇⬅➡⬅➡BA', 'color: #87ceeb;');