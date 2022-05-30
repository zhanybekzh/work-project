; (() => {
    
    const headerMenu = document.querySelector('.header-menu');
    const menuIcon = headerMenu.querySelector('.header-menu__icon');

    if (menuIcon) {
        const menuList = headerMenu.querySelector('.header-menu__list');
        headerMenu.addEventListener('click', (e) => {
            menuIcon.classList.toggle('_active');
            menuList.classList.toggle('_active')
        })
    }
    
})();

(() => {
    const changeProfile = document.querySelector('.change-profile__block');
    const changeProfileTitle = changeProfile.querySelector('.change-profile__title');
    const changeProfileLabels = changeProfile.querySelectorAll('.change-profile__label');
    // Toggle menu
    changeProfileTitle.addEventListener('click', () => {
        if (changeProfile.dataset.state === 'active') {
            changeProfile.setAttribute('data-state', '');
        } else {
            changeProfile.setAttribute('data-state', 'active');
        }
    });
    // Close when click to option
    for (let i = 0; i < changeProfileLabels.length; i++) {
        changeProfileLabels[i].addEventListener('click', (evt) => {
            changeProfile.setAttribute('data-state', '');
        });
    }

})();

(() => {
    const headerUser = document.querySelector('.header-user');
    const userMenu = headerUser.querySelector('.header-user__menu');
    const userMenuShowButton = headerUser.querySelector('.header-user__account');

    if (userMenu) {
        userMenuShowButton.addEventListener('click', (evt) => {
            userMenu.classList.toggle('_active');
        })
    }

})();

(() => {
    feather.replace();
})();