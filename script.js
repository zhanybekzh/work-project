(() => {
    feather.replace();
})();

const show_hide_password = (target) => {
    const input = target.parentElement.querySelector(".form-input__input");

    if (input.getAttribute("type") == "password") {
        target.classList.add("view");
        input.setAttribute("type", "text");
    } else {
        target.classList.remove("view");
        input.setAttribute("type", "password");
    }
    input.focus();
    return false;
};

(() => {
    const headerMenu = document.querySelector(".header-menu");
    if (headerMenu) {
        const menuIcon = headerMenu.querySelector(".header-menu__icon");

        if (menuIcon) {
            const menuList = headerMenu.querySelector(".header-menu__list");
            headerMenu.addEventListener("click", (e) => {
                e.stopPropagation();
                menuIcon.classList.toggle("_active");
                menuList.classList.toggle("_active");
            });
        }
    }
})();

(() => {
    const changeProfile = document.querySelector(".change-profile__block");
    if (changeProfile) {
        const changeProfileTitle = changeProfile.querySelector(
            ".change-profile__title"
        );
        const changeProfileLabels = changeProfile.querySelectorAll(
            ".change-profile__label"
        );
        // Toggle menu
        changeProfileTitle.addEventListener("click", (evt) => {
            evt.stopPropagation();
            if (changeProfile.dataset.state === "active") {
                changeProfile.setAttribute("data-state", "");
            } else {
                changeProfile.setAttribute("data-state", "active");
            }
        });
        // Close when click to option
        for (let i = 0; i < changeProfileLabels.length; i++) {
            changeProfileLabels[i].addEventListener("click", (evt) => {
                changeProfile.setAttribute("data-state", "");
            });
        }
    }
})();

(() => {
    const headerUser = document.querySelector(".header-user");
    if (headerUser) {
        const userMenu = headerUser.querySelector(".header-user__menu");
        const userMenuShowButton = headerUser.querySelector(
            ".header-user__account"
        );

        if (userMenu) {
            userMenuShowButton.addEventListener("click", (evt) => {
                evt.stopPropagation();
                userMenu.classList.toggle("_active");
            });
            // document.addEventListener('click', (evt) => {

            //     const clickTarget = evt.target;

            //     if(clickTarget !== userMenuShowButton && clickTarget !== userMenu && userMenu.classList.contains('_active')) {
            //         userMenu.classList.remove('_active');
            //     }
            // });
        }
    }
})();

(() => {
    let pageName = document.location.pathname;
    const pagesId = document.querySelectorAll(".header-menu__link");
    pagesId.forEach((element) => {
        if (element.classList.contains("header-menu__link_active")) {
            element.classList.remove("header-menu__link_active");
        }
    });
    pagesId.forEach((element) => {

        if (element.getAttribute("href").slice(1) === pageName) {
            element.classList.add("header-menu__link_active");
        }
    });
})();

const openModal = (el) => {
    const modalName = el.dataset.modal;
    if (modalName) {
        const modalEl = document.querySelector(`#${modalName}`);
        modalEl.classList.add('opened');
    }
    return;
}
(() => {
                                                class PlusMinusEl {
                                                    constructor(component) {
                                                        this.component = component;
                                                        this.input = component.querySelector('input.num');
                                                        this.value = Number(this.input.value);
                                                    }
                                                    render = () => {
                                                        this.input.setAttribute('value', String(this.value));
                                                    }
                                                    plus = () => {
                                                        this.value += 1;
                                                        this.render();
                                                    }
                                                    minus = () => {
                                                        if(this.value > 1) {
                                                            this.value -= 1;
                                                            this.render();
                                                        }
                                                    }
                                                }
                                                const plusMinusComponents = document.querySelectorAll(".incAndDecrButtons");
                                                plusMinusComponents.forEach((component) => {
                                                    const plusMinusComponent = new PlusMinusEl(component);
                                                    component.querySelector('.minus').addEventListener('click', plusMinusComponent.minus);
                                                    component.querySelector('.plus').addEventListener('click', plusMinusComponent.plus);
                                                })

})();
(()=> {
    const body = document.body;
    const lockBodyScroll = () => {
        body.classList.add('scroll-hidden');
    };
    const unlockBodyScroll = () => {
        if (body.classList.contains('scroll-hidden')) {
            body.classList.remove('scroll-hidden');
        }

    }

    const modalWindows = document.querySelectorAll('.popup-wrapper');
    modalWindows.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    })
    const openButtons = document.querySelectorAll('.popup__open-button');
    openButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetModal = item.dataset.modal;
            if (targetModal) {
                const modalEl = document.querySelector(`#${targetModal}`);
                if(!modalEl.classList.contains('opened')) {
                    modalEl.classList.add('opened');
                    lockBodyScroll();
                }
            }
        })

    })
    const closeButtons = document.querySelectorAll('.popup__close-button');
    closeButtons.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const targetModal = item.dataset.modal;
            if (targetModal) {
                const modalEl = document.querySelector(`#${targetModal}`);
                if(modalEl.classList.contains('opened')) {
                    modalEl.classList.remove('opened');
                    unlockBodyScroll();
                }
            }
        })

    });
    const modalWindow = document.querySelectorAll('.modal');
    document.addEventListener('keydown', function(event) {
        const key = event.key; // const {key} = event; in ES6+
        if (key === "Escape") {
            if (modalWindow) {

                modalWindow.forEach((item) => {
                    if (item.classList.contains('opened')) {
                        item.classList.remove("opened");
                        unlockBodyScroll();
                    }
                })
            };
        }
    });
    const headerMenu = document.querySelector(".header-menu");
    let menuIcon = null;
    let menuList = null;
    if (headerMenu) {
        menuIcon = headerMenu.querySelector(".header-menu__icon");
        menuList = headerMenu.querySelector(".header-menu__list");
    }
    const userMenu = document.querySelector(".header-user .header-user__menu");
    const changeProfile = document.querySelector(".change-profile__block");
    const profilesDropDowns = document.querySelectorAll('.profiles__dropdown');

    document.body.addEventListener("click", (e) => {

        if (menuIcon) {
            menuIcon.classList.remove("_active");
        }
        if (menuList) {
            menuList.classList.remove("_active");
        }
        if (userMenu) {
            userMenu.classList.remove("_active");
        }
        if (changeProfile) {
            changeProfile.setAttribute("data-state", "");
        }
        if (profilesDropDowns) {
            profilesDropDowns.forEach((item) => item.classList.remove("profiles__dropdown_active"));
        }
        if (modalWindow) {

            modalWindow.forEach((item) => {
                if (item.classList.contains('opened')) {
                    item.classList.remove("opened");
                    unlockBodyScroll();
                }
                })
            };
        });
})();
