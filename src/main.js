import {storage} from "./storage";
import {getHeaderProfile} from './view/header/profile';
import {getMenu} from './view/menu';
import {getSiteSort} from './view/sort';
import {getFilmsContainer} from './view/films/container';
import {getFilmsList} from './view/films/list';
import {getFilmsEmpty} from './view/films/empty';
import {getFilmsTopRated} from './view/films/top-rated';
import {getFilmsMostCommented} from "./view/films/most-commented";
import {movieList} from './view/films/movie-list';
import {getFilmsCard} from './view/films/card';
import {getFooterStatistics} from './view/footer/footer-statisticks';
import {render} from './presenter/render';

// async function fetchTest() {
//   const response = await fetch('https://13.ecmascript.pages.academy/cinemaddict/movies', {
//     headers: {
//       'Authorization': `Basic KAHUKYJlbl`,
//       'Content-Type': 'application/json'
//     }
//   }).then((response) => {
//     return response.json();
//   }).then((result) => {
//     console.log(result);
//   });
// }
//
// fetchTest();

// eslint-disable-next-line no-console
console.log(storage);

// HEADER
const siteHeaderElement = document.querySelector(`.header`);
const rank = 22;

render(siteHeaderElement, getHeaderProfile(rank));

// MAIN
// Site Menu
const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, getMenu());

// Site Sort
render(siteMainElement, getSiteSort());

// Films Container
render(siteMainElement, getFilmsContainer());

// Films List Container
const siteFilmsContainer = siteMainElement.querySelector(`.films`);
render(siteFilmsContainer, getFilmsList());

// Films List Cards
const siteFilmsListCards = siteFilmsContainer.querySelector(`.films-list__container`);

if (movieList.list.length) {
  for (let index = 0; index < 5; index++) {
    render(siteFilmsListCards, getFilmsCard(movieList.list[index]));
  }
} else {
  render(siteFilmsListCards, getFilmsEmpty());
}

// Films List Top Rated
render(siteFilmsContainer, getFilmsTopRated());

// Films List Cards Top Rated
const siteFilmsListCardsTopRated = siteFilmsContainer.querySelector(`.js-films-list-top-rated`);

const siteFilmsListCardsTopRatedCards = siteFilmsListCardsTopRated.querySelector(`.films-list__container`);
for (let index = 0; index < 2; index++) {
  render(siteFilmsListCardsTopRatedCards, getFilmsCard(movieList.topRated[index]));
}

// Films List Most Commented
render(siteFilmsContainer, getFilmsMostCommented());

// Films List Cards Top Rated
const siteFilmsListCardsMostCommented = siteFilmsContainer.querySelector(`.js-films-list-most-commented`);

const siteFilmsListCardsMostCommentedCards = siteFilmsListCardsMostCommented.querySelector(`.films-list__container`);
for (let index = 0; index < 2; index++) {
  render(siteFilmsListCardsMostCommentedCards, getFilmsCard(movieList.mostCommented[index]));
}

// FOOTER
const siteFooterElement = document.querySelector(`.footer`);
const siteFooterStatistics = siteFooterElement.querySelector(`.footer__statistics`);
const statisticsCount = 124545;

render(siteFooterStatistics, getFooterStatistics(statisticsCount));
