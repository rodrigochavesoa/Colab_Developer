// ========================================
// SMOOTH SCROLL & ACTIVE NAV
// ========================================

// reCAPTCHA callback function
function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

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
    // Removed event listener, using reCAPTCHA callback instead
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

// ========================================
// DARK MODE TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleHeader = document.getElementById('themeToggleHeader');
    
    // Função para atualizar o tema
    const updateTheme = (isDark) => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        
        // Atualizar ícone do menu "Mais"
        if (themeToggle) {
            themeToggle.innerHTML = isDark 
                ? '<i class="bi bi-sun"></i><span>Tema Claro</span>'
                : '<i class="bi bi-moon"></i><span>Tema Escuro</span>';
        }
        
        // Atualizar ícone do header
        if (themeToggleHeader) {
            themeToggleHeader.innerHTML = isDark 
                ? '<i class="bi bi-sun"></i>'
                : '<i class="bi bi-moon"></i>';
        }
        
        console.log('Theme changed to:', isDark ? 'dark' : 'light');
    };
    
    // Aplicar tema salvo ao carregar
    const savedTheme = localStorage.getItem('theme') || 'light';
    updateTheme(savedTheme === 'dark');
    
    // Listener para botão do menu "Mais"
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isDark = !document.body.classList.contains('dark-mode');
            updateTheme(isDark);
        });
    }
    
    // Listener para botão do header
    if (themeToggleHeader) {
        themeToggleHeader.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const isDark = !document.body.classList.contains('dark-mode');
            updateTheme(isDark);
        });
    }
});

// ========================================
// KEYBOARD HINT TOOLTIP (Ctrl+K)
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const hasSeenHint = localStorage.getItem('hasSeenCtrlKHint');
    if (hasSeenHint) return;
    
    let hintShown = false;
    
    const showHint = () => {
        if (hintShown) return;
        hintShown = true;
        
        const hint = document.createElement('div');
        hint.className = 'ctrl-k-hint';
        hint.innerHTML = `
            <div class="hint-content">
                <span class="hint-icon">💡</span>
                <span class="hint-text">Pressione <kbd>Ctrl+K</kbd> para navegar</span>
                <button class="hint-close" aria-label="Fechar dica">&times;</button>
            </div>
        `;
        document.body.appendChild(hint);
        hint.classList.add('show');
        
        const closeHint = () => {
            hint.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(hint)) hint.remove();
            }, 300);
            localStorage.setItem('hasSeenCtrlKHint', 'true');
        };
        
        hint.querySelector('.hint-close').addEventListener('click', closeHint);
        
        setTimeout(closeHint, 8000);
        
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                closeHint();
            }
        }, { once: true });
    };
    
    window.addEventListener('scroll', showHint, { once: true });
    setTimeout(showHint, 5000);
});

// ========================================
// BOTTOM TAB BAR - ATOMIC COMPONENTS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const tabItems = document.querySelectorAll('.tab-item');
    const sections = document.querySelectorAll('section[id]');

    // Update active tab based on scroll position
    const updateActiveTab = () => {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - window.innerHeight / 3) {
                currentSection = section.getAttribute('id');
            }
        });

        tabItems.forEach(item => {
            const section = item.getAttribute('data-section');
            item.classList.remove('active');
            if (section === currentSection) {
                item.classList.add('active');
            }
        });
    };

    // Listen to scroll events
    window.addEventListener('scroll', updateActiveTab);
    
    // Smooth scroll to section when tab is clicked
    tabItems.forEach(item => {
        if (item !== document.getElementById('tabMore')) {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('data-section');
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                    updateActiveTab();
                }
            });
        }
    });

    // Initialize
    updateActiveTab();
});

// ========================================
// MORE MENU - DROPDOWN
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const moreBtn = document.getElementById('tabMore');
    const moreMenu = document.getElementById('moreMenu');

    moreBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isHidden = moreMenu.hasAttribute('hidden');
        
        if (isHidden) {
            moreMenu.removeAttribute('hidden');
            moreBtn.classList.add('active');
            moreBtn.setAttribute('aria-expanded', 'true');
        } else {
            moreMenu.setAttribute('hidden', '');
            moreBtn.classList.remove('active');
            moreBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!moreMenu.contains(e.target) && !moreBtn.contains(e.target)) {
            moreMenu.setAttribute('hidden', '');
            moreBtn.classList.remove('active');
            moreBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when clicking a link
    const moreItems = document.querySelectorAll('.more-item');
    moreItems.forEach(item => {
        if (item.getAttribute('href') || item.id === 'themeToggle') {
            item.addEventListener('click', function() {
                moreMenu.setAttribute('hidden', '');
                moreBtn.classList.remove('active');
                moreBtn.setAttribute('aria-expanded', 'false');
            });
        }
    });


});

// ========================================
// COMMAND BAR - CMD/CTRL + K
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const commandBar = document.getElementById('commandBar');
    const commandOverlay = document.getElementById('commandBarOverlay');
    const commandInput = document.getElementById('commandInput');
    const commandResults = document.getElementById('commandResults');

    // Command items configuration
    const commands = [
        { label: 'Features', section: 'features', icon: '🏠', shortcut: '⇧+F' },
        { label: 'Arquitetura', section: 'architecture', icon: '🏗️', shortcut: '⇧+A' },
        { label: 'Roadmap', section: 'roadmap', icon: '📋', shortcut: '⇧+R' },
        { label: 'Contato', section: 'contact', icon: '💬', shortcut: '⇧+C' },
        { label: 'GitHub', url: 'https://github.com/rodrigochavesoa', icon: '🔗', shortcut: 'G' },
        { label: 'Privacidade', url: 'legal.html#privacy', icon: '🛡️', shortcut: 'P' },
        { label: 'Termos de Serviço', url: 'legal.html#terms', icon: '📄', shortcut: 'T' },
    ];

    let selectedIndex = 0;
    let isCommandBarOpen = false;

    // Function to render command results
    const renderResults = (filter = '') => {
        const filtered = commands.filter(cmd =>
            cmd.label.toLowerCase().includes(filter.toLowerCase())
        );

        commandResults.innerHTML = '';
        selectedIndex = 0;

        if (filtered.length === 0) {
            commandResults.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-secondary);">Nenhum resultado encontrado</div>';
            return;
        }

        filtered.forEach((cmd, index) => {
            const item = document.createElement('button');
            item.className = 'command-item';
            if (index === 0) item.classList.add('active');
            item.type = 'button';
            item.innerHTML = `
                <span class="command-item-icon">${cmd.icon}</span>
                <span class="command-item-label">
                    <span class="command-item-text">${cmd.label}</span>
                    <span class="command-item-shortcut">${cmd.shortcut}</span>
                </span>
            `;

            item.addEventListener('click', () => {
                executeCommand(cmd);
            });

            item.addEventListener('mouseover', () => {
                document.querySelectorAll('.command-item').forEach(el => el.classList.remove('active'));
                item.classList.add('active');
                selectedIndex = Array.from(commandResults.querySelectorAll('.command-item')).indexOf(item);
            });

            commandResults.appendChild(item);
        });
    };

    // Execute command
    const executeCommand = (cmd) => {
        if (cmd.section) {
            const section = document.getElementById(cmd.section);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (cmd.url) {
            if (cmd.url.startsWith('http')) {
                window.open(cmd.url, '_blank');
            } else {
                window.location.href = cmd.url;
            }
        }
        // Fechar imediatamente após executar
        closeCommandBar();
    };

    // Open command bar
    const openCommandBar = () => {
        commandBar.removeAttribute('hidden');
        commandOverlay.removeAttribute('hidden');
        commandInput.focus();
        commandInput.value = '';
        renderResults();
        isCommandBarOpen = true;
        document.body.style.overflow = 'hidden';
    };

    // Close command bar
    const closeCommandBar = () => {
        commandBar.setAttribute('hidden', '');
        commandOverlay.setAttribute('hidden', '');
        commandInput.value = '';
        isCommandBarOpen = false;
        document.body.style.overflow = 'auto';
    };

    // Keyboard shortcuts - SEM capture phase para evitar conflitos
    document.addEventListener('keydown', (e) => {
        // Ignorar se está em input ou textarea focado (exceto para Ctrl+K e ESC)
        const activeType = document.activeElement.tagName.toUpperCase();
        const isInputFocused = activeType === 'INPUT' || activeType === 'TEXTAREA';
        
        // Permitir Ctrl+K mesmo dentro de input
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            e.stopPropagation();
            if (isCommandBarOpen) {
                closeCommandBar();
            } else {
                openCommandBar();
            }
            return;
        }

        // ESC sempre fecha command bar, mesmo com input focado
        if (e.key === 'Escape' && isCommandBarOpen) {
            e.preventDefault();
            e.stopPropagation();
            closeCommandBar();
            return;
        }

        // Se há input focado, ignorar outros atalhos
        if (isInputFocused) return;

        // Se comando bar está aberto
        if (isCommandBarOpen) {
            // Arrow Down para navegar para baixo
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const items = commandResults.querySelectorAll('.command-item');
                if (items.length > 0) {
                    selectedIndex = (selectedIndex + 1) % items.length;
                    updateActiveItem(items);
                }
                return;
            }

            // Arrow Up para navegar para cima
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const items = commandResults.querySelectorAll('.command-item');
                if (items.length > 0) {
                    selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                    updateActiveItem(items);
                }
                return;
            }

            // Enter para executar
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopPropagation();
                const items = commandResults.querySelectorAll('.command-item');
                if (items.length > 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                }
                return;
            }
        }

        // Shift + Letra para atalhos (APENAS se command bar está FECHADO)
        if (!isCommandBarOpen && e.shiftKey) {
            const key = e.key.toUpperCase();
            let targetId = null;
            
            switch(key) {
                case 'F':
                    targetId = 'features';
                    break;
                case 'A':
                    targetId = 'architecture';
                    break;
                case 'R':
                    targetId = 'roadmap';
                    break;
                case 'C':
                    targetId = 'contact';
                    break;
            }
            
            if (targetId) {
                e.preventDefault();
                e.stopPropagation();
                const section = document.getElementById(targetId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
                console.log('Atalho Shift+' + key + ' acionado');
                return;
            }
        }

        // Letras simples para atalhos rápidos (APENAS se command bar está FECHADO e sem modificadores)
        if (!isCommandBarOpen && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
            const key = e.key.toUpperCase();
            let targetUrl = null;
            
            switch(key) {
                case 'G':
                    targetUrl = 'https://github.com/rodrigochavesoa';
                    break;
                case 'P':
                    targetUrl = 'legal.html#privacy';
                    break;
                case 'T':
                    targetUrl = 'legal.html#terms';
                    break;
            }
            
            if (targetUrl) {
                e.preventDefault();
                e.stopPropagation();
                if (targetUrl.startsWith('http')) {
                    window.open(targetUrl, '_blank');
                } else {
                    window.location.href = targetUrl;
                }
                console.log('Atalho ' + key + ' acionado → ' + targetUrl);
                return;
            }
        }
    }); // Sem capture phase

    // Helper para atualizar item ativo
    const updateActiveItem = (items) => {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === selectedIndex);
        });
        // Scroll para manter visível
        if (items[selectedIndex]) {
            items[selectedIndex].scrollIntoView({ block: 'nearest' });
        }
    };

    // Input event para filtrar (enquanto digita)
    commandInput.addEventListener('input', (e) => {
        renderResults(e.target.value);
        selectedIndex = 0;
    });

    // Fechar ao clicar no overlay
    commandOverlay.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeCommandBar();
    });

    // Fechar ao clicar fora (no documento)
    document.addEventListener('click', (e) => {
        if (isCommandBarOpen && !commandBar.contains(e.target) && !commandOverlay.contains(e.target)) {
            closeCommandBar();
        }
    });
});

// ========================================
// DIAGRAM COLLAPSE/EXPAND TOGGLE
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    const diagramToggle = document.getElementById('diagramToggle');
    const diagramBox = document.querySelector('.diagram-box');
    const architectureDiagram = document.getElementById('architectureDiagram');
    
    if (diagramToggle && diagramBox) {
        diagramToggle.addEventListener('click', function() {
            const isExpanded = diagramBox.classList.contains('diagram-expanded');
            
            if (isExpanded) {
                // Recolher
                diagramBox.classList.remove('diagram-expanded');
                diagramBox.classList.add('diagram-collapsed');
                diagramToggle.setAttribute('aria-expanded', 'false');
                diagramToggle.querySelector('span').textContent = 'Mostrar mais';
                
                // Scroll suave para o topo do diagrama
                setTimeout(() => {
                    architectureDiagram.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 200);
            } else {
                // Expandir
                diagramBox.classList.remove('diagram-collapsed');
                diagramBox.classList.add('diagram-expanded');
                diagramToggle.setAttribute('aria-expanded', 'true');
                diagramToggle.querySelector('span').textContent = 'Mostrar menos';
            }
        });
    }
});

