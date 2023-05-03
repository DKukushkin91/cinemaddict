import {render} from './render';
// import {storageTest, storageTestComments} from './storageTest';
import {storage} from './storage';
import {getHeaderProfile} from './view/header/profile';
import {getMenu} from './view/menu';
import {getSort} from './view/sort';
import {getMoviesCard} from './view/movies/card';
import {getMoviesContainer} from './view/movies/container';
import {getMoviesEmpty} from './view/movies/empty';
import {getMoviesList} from './view/movies/list';
import {getMoviesMostCommented} from './view/movies/most-commented';
import {getMoviesTopRated} from './view/movies/top-rated';
import {getFooterStatistics} from './view/footer/footer-statisticks';

// storageTest() временно тут, потом удалится
// storageTest().then();
// storageTestComments();
// console.log(storage.movies);
// console.log(storage.comments);

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);
const footerElement = document.querySelector(`.footer`);
const footerStatistics = footerElement.querySelector(`.footer__statistics`);

const rank = 22;
render(headerElement, getHeaderProfile(rank));

// Site Menu (filter)
render(mainElement, getMenu(storage.movies));

// Site Sort
render(mainElement, getSort());

// Movies Container
render(mainElement, getMoviesContainer());

// Films List Container
const moviesContainer = mainElement.querySelector(`.films`);
render(moviesContainer, getMoviesList(storage.movies));

// Films List Cards
const moviesListCards = moviesContainer.querySelector(`.films-list__container`);
if (storage.movies.length) {
  for (let index = 0; index < 5; index++) {
    render(moviesListCards, getMoviesCard(storage.movies[index]));
  }
} else {
  render(moviesListCards, getMoviesEmpty());
}

// Films List Top Rated
render(moviesContainer, getMoviesTopRated());
const moviesListCardsTopRated = moviesContainer.querySelector(`.js-films-list-top-rated`);
const moviesListCardsTopRatedCards = moviesListCardsTopRated.querySelector(`.films-list__container`);
for (let index = 0; index < 2; index++) {
  render(moviesListCardsTopRatedCards, getMoviesCard(storage.movies[index]));
}

// Films List Most Commented
render(moviesContainer, getMoviesMostCommented());
const moviesListCardsMostCommented = moviesContainer.querySelector(`.js-films-list-most-commented`);
const moviesListCardsMostCommentedCards = moviesListCardsMostCommented.querySelector(`.films-list__container`);
for (let index = 0; index < 2; index++) {
  render(moviesListCardsMostCommentedCards, getMoviesCard(storage.movies[index]));
}

// FOOTER
render(footerStatistics, getFooterStatistics(storage.movies.length));
