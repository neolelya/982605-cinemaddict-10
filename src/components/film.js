import AbstractComponent from './abstract-component';
import {formatTime, formatYear} from '../utils/utils';
import pluralize from 'pluralize';

const DESCRIPTION_LENGTH = 139;

const createFilmTemplate = ({
  comments,
  title,
  totalRating,
  poster,
  releaseDate,
  runtime,
  genre,
  description,
  isWatchlist,
  isHistory,
  isFavorites,
}) =>
  (
    `<article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${formatYear(releaseDate)}</span>
          <span class="film-card__duration">${formatTime(runtime)}</span>
          <span class="film-card__genre">${genre.size > 0 ? Array.from(genre)[0] : ``}</span>
        </p>
        <img src="${poster}" alt="" class="film-card__poster">
        <p class="film-card__description">${description.length <= DESCRIPTION_LENGTH ? `${description.slice(0, 1).toUpperCase()}${description.slice(1)}` : `${`${description.slice(0, 1).toUpperCase()}${description.slice(1)}`.substr(0, DESCRIPTION_LENGTH)}...`}</p>
        <a class="film-card__comments">
            ${pluralize(`comment`, comments.length, true)}
        </a>
        <form class="film-card__controls">
          <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isWatchlist ? `film-card__controls-item--active` : ``}"></button>
          <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isHistory ? `film-card__controls-item--active` : ``}"></button>
          <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorites ? `film-card__controls-item--active` : ``}"></button>
        </form>
    </article>`
  );

export default class Film extends AbstractComponent {
  constructor(film) {
    super();
    this._film = film;
  }

  getTemplate() {
    return createFilmTemplate(this._film);
  }

  setDetailClickHandler(handler) {
    this.getElement()
      .querySelectorAll(`.film-card__title, .film-card__poster, .film-card__comments`)
      .forEach((element) => element.addEventListener(`click`, handler));
  }

  setWatchlistClickHandler(handler) {
    this.getElement()
      .querySelector(`.film-card__controls-item--add-to-watchlist`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        handler();
      });
  }

  setAlreadyWatchedClickHandler(handler) {
    this.getElement()
      .querySelector(`.film-card__controls-item--mark-as-watched`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        handler();
      });
  }

  setFavoriteClickHandler(handler) {
    this.getElement()
      .querySelector(`.film-card__controls-item--favorite`)
      .addEventListener(`click`, (evt) => {
        evt.preventDefault();
        handler();
      });
  }
}
