import AbstractComponent from './abstract-component';

const createFilmsListTemplate = () => {
  return (
    `<section class="films-list">
        <h2 class="films-list__title visually-hidden"></h2>
        <div class="films-list__container"></div>
    </section>`
  );
};

export default class FilmsList extends AbstractComponent {
  getTemplate() {
    return createFilmsListTemplate();
  }
}
