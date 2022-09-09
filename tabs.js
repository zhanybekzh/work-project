class ItcTabs {
   constructor(target, config) {
       const defaultConfig = {};
       this._config = Object.assign(defaultConfig, config);
       this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
       this._elButtons = this._elTabs.querySelectorAll('.tabs-list__tab');
       this._elPanes = this._elTabs.querySelectorAll('.tabs-content');
       this._eventShow = new Event('tab.change');
       this._init();
       this._events();
   }

   _init() {
       this._elTabs.setAttribute('role', 'tablist');
       this._elButtons.forEach((el, index) => {
       el.dataset.index = index;
       el.setAttribute('role', 'tab');
       this._elPanes[index].setAttribute('role', 'tabpanel');
       });
   }

   show(elLinkTarget) {
       const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
       const elLinkActive = this._elTabs.querySelector('.tabs-list__tab_active');
       const elPaneShow = this._elTabs.querySelector('.tabs__pane_show');
       if (elLinkTarget === elLinkActive) {
       return;
       }
       elLinkActive ? elLinkActive.classList.remove('tabs-list__tab_active') : null;
       elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null;
       elLinkTarget.classList.add('tabs-list__tab_active');
       elPaneTarget.classList.add('tabs__pane_show');
       this._elTabs.dispatchEvent(this._eventShow);
       elLinkTarget.focus();
   }
   showByIndex(index) {
       const elLinkTarget = this._elButtons[index];
       elLinkTarget ? this.show(elLinkTarget) : null;
   };
   _events() {
       this._elTabs.addEventListener('click', (e) => {
       const target = e.target.closest('.tabs-list__tab');
       if (target) {
           e.preventDefault();
           this.show(target);
       }
       });
   }
   }
   const tabs = document.querySelectorAll('.tabs');
   for (let i = 0, length = tabs.length; i < length; i++) {
   new ItcTabs(tabs[i]);
   }
