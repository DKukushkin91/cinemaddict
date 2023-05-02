import dayjs from 'dayjs';

const getTimeFromMinutes = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;

  return `${hours}h ${minutes}m`;
};

export const getFilmsCard = (card) => {
  const {"film_info": filmInfo, "user_details": userDetails, comments} = card;

  return (
    `<article class="film-card">
          <a class="film-card__link">
            <h3 class="film-card__title">${filmInfo.title}</h3>
            <p class="film-card__rating">${filmInfo[`total_rating`]}</p>
            <p class="film-card__info">
              <span class="film-card__year">${dayjs(filmInfo.release.date).year()}</span>
              <span class="film-card__duration">${getTimeFromMinutes(filmInfo.runtime)}</span>
              <span class="film-card__genre">${filmInfo.genre[0]}</span>
            </p>
            <img src="${filmInfo.poster}" alt="" class="film-card__poster">
            <p class="film-card__description">${filmInfo.description}</p>
            <span class="film-card__comments">${comments.length} comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite ${userDetails.favorite ? `film-card__controls-item--active` : ``}" type="button">Mark as favorite</button>
          </div>
        </article>`
  );
};
