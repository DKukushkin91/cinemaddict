import {render} from './render';
import {storage} from './storage/storage';
import {getHeaderProfile} from '@view/header/profile';
import {getMenu} from '@view/menu';
import {getSort} from '@view/sort';
import {getMoviesCard} from '@view/movies/card';
import {getMoviesContainer} from '@view/movies/container';
import {getMoviesEmpty} from '@view/movies/empty';
import {getMoviesList} from '@view/movies/list';
import {getMoviesMostCommented} from '@view/movies/most-commented';
import {getMoviesTopRated} from '@view/movies/top-rated';
import {getFooterStatistics} from '@view/footer/footer-statisticks';
import {getFilmsPopupDetails} from '@view/movies/popup-details';

const elementBody = document.querySelector('body');
const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerElement = document.querySelector('.footer');
const footerStatistics = footerElement.querySelector('.footer__statistics');

// Site Header
render(headerElement, getHeaderProfile(storage.user.rank));

// Site Menu (filter)
render(mainElement, getMenu(storage.movies));

// Site Sort
render(mainElement, getSort());

// Movies Container
render(mainElement, getMoviesContainer());

// Films List Container
const moviesContainer = mainElement.querySelector('.films');
render(moviesContainer, getMoviesList(storage.movies));

// Films List Cards
const moviesListCards = moviesContainer.querySelector('.films-list__container');
if (storage.movies.length) {
  for (let index = 0; index < 5; index++) {
    render(moviesListCards, getMoviesCard(storage.movies[index]));
  }

  const cardItem = moviesListCards.querySelectorAll('.film-card');

  cardItem.forEach((item, index) => {
    const filmCardPoster = item.querySelector('.film-card__poster');
    const filmCardTitle = item.querySelector('.film-card__title');
    const filmCardComments = item.querySelector('.film-card__comments');

    const filmCardAddToWatchlist = item.querySelector('.film-card__controls-item--add-to-watchlist');
    const filmCardAddToHistory = item.querySelector('.film-card__controls-item--mark-as-watched');
    const filmCardAddToFavorite = item.querySelector('.film-card__controls-item--favorite');

    filmCardPoster.addEventListener('click', () => handleClickMovieCard(index));
    filmCardTitle.addEventListener('click', () => handleClickMovieCard(index));
    filmCardComments.addEventListener('click', () => handleClickMovieCard(index));

    filmCardAddToWatchlist.addEventListener('click', () => handleClickAddToWatchlist(index));
    filmCardAddToHistory.addEventListener('click', () => handleClickAddToHistory(index));
    filmCardAddToFavorite.addEventListener('click', () => handleClickAddToFavorite(index));
  });
} else {
  render(moviesListCards, getMoviesEmpty());
}

function handleClickMovieCard(index) {
  handleClickModalClose();

  render(elementBody, getFilmsPopupDetails(storage.movies[index]));

  const elementModal = elementBody.querySelector('.film-details');
  const elementModalClose = elementModal.querySelector('.film-details__close-btn');

  elementModalClose.addEventListener('click', handleClickModalClose);
}

function handleClickModalClose() {
  if (elementBody.querySelector('.film-details')) {
    const elementModal = elementBody.querySelector('.film-details');
    const elementModalClose = elementModal.querySelector('.film-details__close-btn');

    elementModalClose.removeEventListener('click', handleClickModalClose);
    elementModal.remove();
  }
}

function handleClickAddToWatchlist(index) {
  console.log(storage.movies[index].user_details.watchlist);

  storage.movies[index].user_details.watchlist = !storage.movies[index].user_details.watchlist;

  render(mainElement, getMenu(storage.movies));

  console.log(storage.movies[index].user_details.watchlist);
}

function handleClickAddToHistory(index) {
  console.log('handleClickAddToHistory');
}

function handleClickAddToFavorite(index) {
  console.log('handleClickAddToFavorite');
}

// Films List Top Rated
render(moviesContainer, getMoviesTopRated());
const moviesListCardsTopRated = moviesContainer.querySelector('.js-films-list-top-rated');
const moviesListCardsTopRatedCards = moviesListCardsTopRated.querySelector('.films-list__container');
for (let index = 0; index < 2; index++) {
  render(moviesListCardsTopRatedCards, getMoviesCard(storage.movies[index]));
}

// Films List Most Commented
render(moviesContainer, getMoviesMostCommented());
const moviesListCardsMostCommented = moviesContainer.querySelector('.js-films-list-most-commented');
const moviesListCardsMostCommentedCards = moviesListCardsMostCommented.querySelector('.films-list__container');
for (let index = 0; index < 2; index++) {
  render(moviesListCardsMostCommentedCards, getMoviesCard(storage.movies[index]));
}

// FOOTER
render(footerStatistics, getFooterStatistics(storage.movies.length));
