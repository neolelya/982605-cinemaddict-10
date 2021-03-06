import AbstractComponent from './abstract-component';
import {FilterName} from '../models/movies';

export const MenuType = {
  FILTER: `filter`,
  STATS: `stats`,
};

const createFiltersTemplate = (data, activeItem) => {
  return (
    `<nav class="main-navigation">
      <a href="#all" data-menu-type="${MenuType.FILTER}" class="main-navigation__item ${data[FilterName.ALL].isActive && activeItem === MenuType.FILTER ? `main-navigation__item--active` : ``}">All movies</a>
      <a href="#watchlist" data-menu-type="${MenuType.FILTER}" class="main-navigation__item ${data[FilterName.WATCHLIST].isActive && activeItem === MenuType.FILTER ? `main-navigation__item--active` : ``}">${data.watchlist.name[0].toUpperCase()}${data.watchlist.name.slice(1)} <span class="main-navigation__item-count">${data.watchlist.count}</span></a>
      <a href="#history" data-menu-type="${MenuType.FILTER}" class="main-navigation__item ${data[FilterName.HISTORY].isActive && activeItem === MenuType.FILTER ? `main-navigation__item--active` : ``}">${data.history.name[0].toUpperCase()}${data.history.name.slice(1)} <span class="main-navigation__item-count">${data.history.count}</span></a>
      <a href="#favorites" data-menu-type="${MenuType.FILTER}" class="main-navigation__item ${data[FilterName.FAVORITES].isActive && activeItem === MenuType.FILTER ? `main-navigation__item--active` : ``}">${data.favorites.name[0].toUpperCase()}${data.favorites.name.slice(1)} <span class="main-navigation__item-count">${data.favorites.count}</span></a>
      <a href="#stats" data-menu-type="${MenuType.STATS}" class="main-navigation__item ${activeItem === MenuType.STATS ? `main-navigation__item--active` : ``} main-navigation__item--additional">Stats</a>
    </nav>`
  );
};

export default class MenuFilters extends AbstractComponent {
  constructor(data, activeItem) {
    super();
    this._data = data;
    this._activeItem = activeItem;
  }

  getTemplate() {
    return createFiltersTemplate(this._data, this._activeItem);
  }

  setActiveFilterClickHandler(handler) {
    this.getElement().addEventListener(`click`, (evt) => {
      const href = (evt.target.href || ``).split(`#`)[1];

      if (evt.target.tagName !== `A` || href === `stats`) {
        return;
      }

      handler(href);
    });
  }
}
