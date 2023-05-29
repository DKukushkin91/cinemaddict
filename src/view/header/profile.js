import {Rank} from '@config/headerProfile';
import {getRank} from '@view/header/rank';

export const getHeaderProfile = (rankIndex) => {
  let rankName;

  if (rankIndex > 0 && rankIndex < 11) {
    rankName = Rank.NOVICE;
  } else if (rankIndex > 10 && rankIndex < 21) {
    rankName = Rank.FAN;
  } else {
    rankName = Rank.MOVIE_BUF;
  }

  return (
    `<section class="header__profile profile">
      ${rankIndex > 0 ? getRank(rankName) : ''}
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};
