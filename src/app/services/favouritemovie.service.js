export const favourites = [];
export const addFavourite = (movie) => {
  favourites.push(movie);
};
export const removeFavourite = (movie) => {
  favourites.splice(favourites.indexOf(movie), 1);
};
