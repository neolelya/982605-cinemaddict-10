export const createFilmDetailsTemplate = () => {
  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button"></button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="#" alt="">
              <p class="film-details__age"></p>
            </div>
    
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title"></h3>
                  <p class="film-details__title-original"></p>
                </div>
    
                <div class="film-details__rating">
                  <p class="film-details__total-rating"></p>
                </div>
              </div>
    
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell"></td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell"></td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell"></td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell"></td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell"></td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell"></td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term"></td>
                  <td class="film-details__cell">
                    <span class="film-details__genre"></span>
                    <span class="film-details__genre"></span>
                    <span class="film-details__genre"></span></td>
                </tr>
              </table>
    
              <p class="film-details__film-description"></p>
            </div>
          </div>
    
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist"></label>
    
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched"></label>
    
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite"></label>
          </section>
        </div>
    
        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title"><span class="film-details__comments-count"></span></h3>
    
            <ul class="film-details__comments-list">
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="#" width="55" height="55" alt="emoji">
                </span>
                <div>
                  <p class="film-details__comment-text"></p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author"></span>
                    <span class="film-details__comment-day"></span>
                    <button class="film-details__comment-delete"></button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="#" width="55" height="55" alt="emoji">
                </span>
                <div>
                  <p class="film-details__comment-text"></p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author"></span>
                    <span class="film-details__comment-day"></span>
                    <button class="film-details__comment-delete"></button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="#" width="55" height="55" alt="emoji">
                </span>
                <div>
                  <p class="film-details__comment-text"></p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author"></span>
                    <span class="film-details__comment-day"></span>
                    <button class="film-details__comment-delete"></button>
                  </p>
                </div>
              </li>
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="#" width="55" height="55" alt="emoji">
                </span>
                <div>
                  <p class="film-details__comment-text"></p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author"></span>
                    <span class="film-details__comment-day"></span>
                    <button class="film-details__comment-delete"></button>
                  </p>
                </div>
              </li>
            </ul>
    
            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>
    
              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>
    
              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src=".images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>
    
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="neutral-face">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>
    
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-gpuke" value="grinning">
                <label class="film-details__emoji-label" for="emoji-gpuke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>
    
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="grinning">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};