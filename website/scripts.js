// ========================================
// SMOOTH SCROLL & ACTIVE NAV
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Form submission - Formspree will handle the submission
    const form = document.querySelector('.contact-form form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Allow normal form submission to Formspree
            console.log('Formulário enviado para Formspree');
        });
    }
});

// ========================================
// ACTIVE NAV STYLE
// ========================================

const style = document.createElement('style');
style.textContent = `
    .nav a.active {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
    }
`;
document.head.appendChild(style);

// ========================================
// AUTO UPDATE COPYRIGHT YEAR
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('p').forEach(p => {
        p.innerHTML = p.innerHTML.replace(/&copy; \d{4}/, `&copy; ${currentYear}`);
    });
});
