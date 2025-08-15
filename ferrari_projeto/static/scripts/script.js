// Script para adicionar interatividade à landing page da Ferrari LaFerrari

document.addEventListener('DOMContentLoaded', function() {
    // Atualiza o ano atual no rodapé
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Adiciona classe 'visible' ao hero após carregamento
    const hero = document.querySelector('.hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('visible');
        }, 100);
    }
    
    // Implementa animação de scroll para as seções
    const sections = document.querySelectorAll('.section');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }
    
    // Função para verificar elementos visíveis durante o scroll
    function checkVisibleSections() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }
    
    // Verifica seções visíveis no carregamento inicial
    checkVisibleSections();
    
    // Adiciona evento de scroll para verificar seções visíveis
    window.addEventListener('scroll', checkVisibleSections);
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
