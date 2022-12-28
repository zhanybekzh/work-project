(() => {
    class CatalogItem {
        constructor(obj) {
            this.title = obj.title;
            this.preview = obj.preview;
            this.price = obj.price;
            this.href = obj.href;
            this.imgSrc = obj.imgSrc;
            this.isPromo = obj.isPromo;
            this.oldPrice = obj.oldPrice;
        }
        render() {
            const catalogItem = document.createElement("li");
            catalogItem.classList.add("catalog-list__item");
            catalogItem.classList.add("item");
            catalogItem.innerHTML = `
            <div class="item__image">
                <img
                    src="${this.imgSrc}"
                    alt="${this.title}"
                />

            </div>
            ${(this.isPromo) ?
                '<div class="item__promo-bonus"> БОНУС </div>' : ''}
            <div class="item__content">
                <p class="item__title">
                    ${this.title}
                </p>
                <p class="item__preview">
                    ${this.preview}
                </p>
                <div class="item__price ${(this.isPromo) ? 'item__price_promo' : ''}">
                    <div class="item__price-values">
                        <div class="item__price-current">
                            ${this.price}
                        </div>
                        <div class="item__price-old">
                        ${(this.isPromo) ? this.oldPrice : ''}
                        </div>
                        <div class="item__price-promo-flag"></div>
                    </div>
                    </div>
                    <a href="${this.href}" class="item__link">
                <a href="#" class="item__about">
                    Подробнее
                </a>
            </div>
        `;
            return catalogItem;
        }
    }

    const list = document.createElement("ul");
    list.classList.add("catalog-list");
    const fragment = document.createDocumentFragment();
    const catalogItemsArr = [
        {
            title: 'Дистанционный тренинг «СНТ и Виртуальный склад в системе ИС ЭСФ»',
            preview: 'Работа с СНТ и модулем Виртуальный склад как на портале ИС ЭСФ, так и в учетной системе',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/1.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг по основам бухгалтерского учета',
            preview: 'Для тех, кто хочет изучить бухгалтерский учет и научиться вести его на практике',
            price: 'от 10 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/2.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Онлайн консультации по ведению учета в типовых продуктах 1С:Предприятие',
            preview: 'Сбор финансовой, налоговой и управленческой отчетности Работа с ЭАВР, ЭСФ, СНТ, ВС',
            price: 'от 10 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/3.jpg',
            isPromo: true,
            oldPrice: 'от 15 000 тг',
        },
        {
            title: 'Информационно-аналитический портал PRO1C',
            preview: '1С:Бухгалтерия\n 1С:Управление нашей фирмой\n 1С:Зартплата и Управление персоналом\n 1С:Розница ',
            price: 'от 10 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/4.jpg',
            isPromo: true,
            oldPrice: 'от 17 000 тг',
        },
        {
            title: 'Прямая отправка налоговой отчетности из 1С',
            preview: 'Передача финансовой отчетности юридическими лицами из программных продуктов на базе 1С:Бухгалтерия в Halyk Bank',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/5.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг «Упрощенная декларация: ведение учета и заполнение ФНО 910.00»',
            preview: 'Обмен данными прикладных решений 1С:Предприятие',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/6.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: '1С в Облаке',
            preview: 'Тест Обмен данными прикладных решений 1С:Предприятие с ИС МПТ',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/7.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг «Заполнение Декларации по КПН (ф.100.00) в 1С: Бухгалтерии для Казахстана 3.0»',
            preview: 'Поможет освоить программу и самостоятельно вести учет в 1С Доступ к собственной учебной базе 1С в облаке на время обучения',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/8.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг «Заполнение Декларации по ИПН и СН (ф.200.00) в 1С: Бухгалтерии для Казахстана 3.0»',
            preview: '',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/9.jpg',
            isPromo: true,
            oldPrice: 'от 25 000 тг',
        },
        {
            title: 'Дистанционный тренинг «Бухгалтерский учет в 1С:Бухгалтерии для Казахстана 3.0»',
            preview: 'Бонус полезные «кейсы» с ответами на самые важные вопросы',
            price: 'от 15 000 тг',
            href: '/catalog-landing.html',
            imgSrc: './assets/img/catalog-services/10.jpg',
            isPromo: '',
            oldPrice: '',
        }
    ];
    catalogItemsArr.forEach(arrItem => {
        const newCatalogItem = new CatalogItem(arrItem).render();
        fragment.appendChild(newCatalogItem);
    });
    list.appendChild(fragment);
    const catalogElement = document.querySelector('.catalog');
    catalogElement.appendChild(list);
})();
