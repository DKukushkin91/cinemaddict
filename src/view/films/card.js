
export const getFilmsCard = (item) => {
  return `<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${item.title}</h3>
            <p class="film-card__rating">${item.rating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${item.year}</span>
              <span class="film-card__duration">${item.duration}</span>
              <span class="film-card__genre">${item.genre}</span>
            </p>
            <img src="${item.poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${item.description}</p>
            <span class="film-card__comments">${item.comments}</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>`;
};
