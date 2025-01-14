const hamburguer = document.querySelector('.menu-hamburguer');
        const menu = document.querySelector('.menu');
        
        hamburguer.addEventListener('click', () => {
            menu.classList.toggle('active');
        });