"use strict";
 let numberOfFilms;

 function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели','');
    }

 }

start();
    const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    
function rememberMyFilms () {
    for (let i = 1; i < 2; i++){
        
        const abc = prompt('Последний из фильмов?','');
        const b = +prompt('оцените фильм','');

        if(abc != null && b != null && abc != '' && b != '' && abc.length < 50) {
            personalMovieDB.movies[abc] = b;   
        } else {
            i--;        
        }
           

    }
}
rememberMyFilms();
   
//3

function detectPersonalFilms() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    

}

detectPersonalFilms();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}


//console.log(personalMovieDB);
showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();