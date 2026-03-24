// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});





// 滚动检测，触发动画效果
function checkVisibility() {
    const elements = document.querySelectorAll('.about h2, .about-text, .about-image, .skills h2, .skill-item, .projects h2, .project-item, .internship h2, .internship-item, .contact h2, .contact-form, .contact-info');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

// 初始检查
checkVisibility();

// 滚动时检查
window.addEventListener('scroll', checkVisibility);