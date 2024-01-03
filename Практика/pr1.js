let numbersOfFilms;

function start() {
  numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
  
  for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько вы оцените его?', '');
  
      if (a != null && b != null && a !='' && b !='' && a.length < 50 ) {
          personalMovieDB.movies[a] = b;
          console.log('Done');
        } else {
            console.log('error');
            i--;
        }
      }
}

rememberMyFilms();



function detectPersonalLevel() {
  
            if (personalMovieDB.count < 10) {
               console.log('Просмотрено довольно мало фильмов');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
              console.log('Вы классический зритель');
            } else if (personalMovieDB.count >= 30) {
              console.log('Вы киноман');
            } else {
              console.log('Произошла ошибка');
            }

}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
      console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat)

function writeYourGenres() {
  for (let i = 1; i<=3; i++) {
  const genre = prompt(`Ваш любимый жанр под номером ${i}`);
  personalMovieDB.genres[i - 1] = genre;
  } 
}

writeYourGenres();

console.log(personalMovieDB);