document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu-mobile ul'); 
    
    const menuLinks = document.querySelectorAll('.menu-mobile ul li a'); 

    menuIcon.addEventListener('click', function() {
        
        menuList.classList.toggle('active');
        menuIcon.classList.toggle('active'); 
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuList.classList.remove('active');
            menuIcon.classList.remove('active');
        });
    });
});