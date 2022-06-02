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
        });
        // document.addEventListener('click', (evt) => {

        //     const clickTarget = evt.target;

        //     if(clickTarget !== userMenuShowButton && clickTarget !== userMenu && userMenu.classList.contains('_active')) {
        //         userMenu.classList.remove('_active');
        //     }
        // });
    }

})();

(() => {
    feather.replace();
})();



(() => {
    let pageName = document.location.pathname;
    const pagesId = document.querySelectorAll('.header-menu__link');
    pagesId.forEach(element => {
        if (element.classList.contains('header-menu__link_active')) {
            element.classList.remove('header-menu__link_active');
        }
    });
    pagesId.forEach(element => {
        console.log(element.getAttribute('href').slice(1));
        console.log(pageName);
        console.log(element.getAttribute('href').slice(1) === pageName);
        if(element.getAttribute('href').slice(1) === pageName) {
            element.classList.add('header-menu__link_active');
        }
    });

})();
