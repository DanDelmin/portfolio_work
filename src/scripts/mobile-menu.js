function toggleMobileMenu() {
    let header = document.querySelector('.header'),
        mobileMenu = document.querySelector('.mobile-menu');

    header.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains("header__burger-btn")) {
            mobileMenu.classList.add('active');
        } else if (target.classList.contains("mobile-menu__close")) {
            mobileMenu.classList.remove('active');
        }
    });
}

toggleMobileMenu();