
export const getMenu = (movies) => {
  let watchlist = 0;
  let history = 0;
  let favorite = 0;

  movies.forEach((movie) => {
    if (movie.user_details.watchlist) {
      watchlist++;
    }

    if (movie.user_details.already_watched) {
      history++;
    }

    if (movie.user_details.favorite) {
      favorite++;
    }
  });

  return (
    `<nav class="main-navigation">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorite}</span></a>
    </nav>`
  );
};
