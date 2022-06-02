(() => {
    class CatalogItem {
        constructor(obj) {
            this.title = obj.title;
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
            <div class="item__content">
                <p class="item__title">
                    ${this.title}
                </p>
                <div class="item__price ${(this.isPromo) ? 'item__price_promo' : ''}">
                    <div class="item__price-values">
                        <div class="item__price-current">
                            ${this.price}
                        </div>
                        <div class="item__price-old">
                        ${(this.isPromo) ? this.oldPrice : ''}
                        </div>
                    </div>
                    </div>
                <a href="${this.href}" class="item__about">
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
            price: 'от 15 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/1.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг по основам бухгалтерского учета',
            price: 'от 10 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/2.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Онлайн консультации по ведению учета в типовых продуктах 1С:Предприятие',
            price: 'от 10 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/3.jpg',
            isPromo: true,
            oldPrice: 'от 15 000 тг',
        },
        {
            title: 'Информационно-аналитический портал PRO1C',
            price: 'от 10 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/4.jpg',
            isPromo: true,
            oldPrice: 'от 17 000 тг',
        },
        {
            title: 'Прямая отправка налоговой отчетности из 1С',
            price: 'от 15 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/5.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг «Упрощенная декларация: ведение учета и заполнение ФНО 910.00»',
            price: 'от 15 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/6.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: '1С в Облаке',
            price: 'от 15 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/7.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг «Заполнение Декларации по КПН (ф.100.00) в 1С: Бухгалтерии для Казахстана 3.0»',
            price: 'от 15 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/8.jpg',
            isPromo: '',
            oldPrice: '',
        },
        {
            title: 'Дистанционный тренинг «Заполнение Декларации по ИПН и СН (ф.200.00) в 1С: Бухгалтерии для Казахстана 3.0»',
            price: 'от 15 000 тг',
            href: '#',
            imgSrc: './assets/img/catalog-services/9.jpg',
            isPromo: true,
            oldPrice: 'от 25 000 тг',
        },
        {
            title: 'Дистанционный тренинг «Бухгалтерский учет в 1С:Бухгалтерии для Казахстана 3.0»',
            price: 'от 15 000 тг',
            href: '#',
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
