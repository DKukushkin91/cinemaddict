
export const getMoviesComments = (movie) => {
  const {comments} = movie;

  return (
    `<section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
    </section>`
  );
};
