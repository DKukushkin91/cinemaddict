import {createHeaderProfile} from './view/header/profile';
import {createMenu} from './view/menu';
import {createSiteSort} from './view/sort';
import {createFilmsContainer} from './view/films/container';
import {createFilmsList} from './view/films/list';
import {createFilmsTopRated} from './view/films/list-top-rated';
import {createFilmsMostCommented} from "./view/films/list-most-commented";
import {movieList} from './view/films/movie-list';
import {createFilmsCard} from './view/films/card';
import {createFooterStatistics} from './view/footer/footer-statisticks';


const render = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

// HEADER
const siteHeaderElement = document.querySelector('.header');
render(siteHeaderElement, createHeaderProfile());

// MAIN
// Site Menu
const siteMainElement = document.querySelector('.main');
render(siteMainElement, createMenu());

// Site Sort
render(siteMainElement, createSiteSort());

// Films Container
render(siteMainElement, createFilmsContainer());

// Films List Container
const siteFilmsContainer = siteMainElement.querySelector('.films');
render(siteFilmsContainer, createFilmsList());

// Films List Cards
const siteFilmsListCards = siteFilmsContainer.querySelector('.films-list__container');
for (let $index = 0; $index < 5; $index++) {
  render(siteFilmsListCards, createFilmsCard(movieList.list[$index]));
}

// Films List Top Rated
render(siteFilmsContainer, createFilmsTopRated());

// Films List Cards Top Rated
const siteFilmsListCardsTopRated = siteFilmsContainer.querySelector('.js-films-list-top-rated');

const siteFilmsListCardsTopRatedCards = siteFilmsListCardsTopRated.querySelector('.films-list__container');
for (let $index = 0; $index < 2; $index++) {
  render(siteFilmsListCardsTopRatedCards, createFilmsCard(movieList.topRated[$index]));
}

// Films List Most Commented
render(siteFilmsContainer, createFilmsMostCommented());

// Films List Cards Top Rated
const siteFilmsListCardsMostCommented = siteFilmsContainer.querySelector('.js-films-list-most-commented');

const siteFilmsListCardsMostCommentedCards = siteFilmsListCardsMostCommented.querySelector('.films-list__container');
for (let $index = 0; $index < 2; $index++) {
  render(siteFilmsListCardsMostCommentedCards, createFilmsCard(movieList.mostCommented[$index]));
}

// FOOTER
const siteFooterElement = document.querySelector('.footer');
const siteFooterStatistics = siteFooterElement.querySelector('.footer__statistics');
render(siteFooterStatistics, createFooterStatistics());
