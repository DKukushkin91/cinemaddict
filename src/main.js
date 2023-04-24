import {getHeaderProfile} from './view/header/profile';
import {getMenu} from './view/menu';
import {getSiteSort} from './view/sort';
import {getFilmsContainer} from './view/films/container';
import {getFilmsList} from './view/films/list';
import {getFilmsTopRated} from './view/films/list-top-rated';
import {getFilmsMostCommented} from "./view/films/list-most-commented";
import {movieList} from './view/films/movie-list';
import {getFilmsCard} from './view/films/card';
import {getFooterStatistics} from './view/footer/footer-statisticks';

const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

// HEADER
const siteHeaderElement = document.querySelector('.header');
render(siteHeaderElement, getHeaderProfile());

// MAIN
// Site Menu
const siteMainElement = document.querySelector('.main');
render(siteMainElement, getMenu());

// Site Sort
render(siteMainElement, getSiteSort());

// Films Container
render(siteMainElement, getFilmsContainer());

// Films List Container
const siteFilmsContainer = siteMainElement.querySelector('.films');
render(siteFilmsContainer, getFilmsList());

// Films List Cards
const siteFilmsListCards = siteFilmsContainer.querySelector('.films-list__container');
for (let index = 0; index < 5; index++) {
  render(siteFilmsListCards, getFilmsCard(movieList.list[index]));
}

// Films List Top Rated
render(siteFilmsContainer, getFilmsTopRated());

// Films List Cards Top Rated
const siteFilmsListCardsTopRated = siteFilmsContainer.querySelector('.js-films-list-top-rated');

const siteFilmsListCardsTopRatedCards = siteFilmsListCardsTopRated.querySelector('.films-list__container');
for (let index = 0; index < 2; index++) {
  render(siteFilmsListCardsTopRatedCards, getFilmsCard(movieList.topRated[index]));
}

// Films List Most Commented
render(siteFilmsContainer, getFilmsMostCommented());

// Films List Cards Top Rated
const siteFilmsListCardsMostCommented = siteFilmsContainer.querySelector('.js-films-list-most-commented');

const siteFilmsListCardsMostCommentedCards = siteFilmsListCardsMostCommented.querySelector('.films-list__container');
for (let index = 0; index < 2; index++) {
  render(siteFilmsListCardsMostCommentedCards, getFilmsCard(movieList.mostCommented[index]));
}

// FOOTER
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatistics = siteFooterElement.querySelector('.footer__statistics');
render(siteFooterStatistics, getFooterStatistics());
