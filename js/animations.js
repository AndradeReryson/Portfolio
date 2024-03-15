const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if(entry.isIntersecting){
            
            entry.target.classList.add('active');
        } 
    });;
}, {rootMargin: '0px 0px -20% 0px'});

const elementos_animados = document.querySelectorAll('.animated');
elementos_animados.forEach((elem) => {
    observer.observe(elem);
})

const lista_badges = document.querySelectorAll('.badge-box > div');
lista_badges.forEach((badge, idx) => {
    badge.style.animationDelay = ((idx+1) * 75)+"ms";
})

const lista_projetos = document.querySelectorAll('.card-proj')
lista_projetos.forEach((proj, idx) => {
    proj.style.animationDelay = ((idx+1) * 300)+"ms";
})