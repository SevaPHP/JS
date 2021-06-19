"use strict";
    const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
                 personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели',''); 
                 while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                 personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели','');
                    }     
                },
        rememberMyFilms: function() {
                 for (let i = 1; i < 2; i++){
                 const abc = prompt('Последний из фильмов?','');
                 const b = +prompt('оцените фильм','');
                 if(abc != null && b != null && abc != '' && b != '' && abc.length < 50) {
                    personalMovieDB.movies[abc] = b;   
                    } else {
                        i--;        
                    }
                   
        
                    }
                },
        detectPersonalFilms: function() {
                 if (personalMovieDB.count < 10) {
                 console.log("Просмотрено довольно мало фильмов");
                 } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                 console.log("Вы классический зритель");
                 } else if (personalMovieDB.count >= 30) {
                 console.log("Вы киноман");
                 } else {
                  console.log("Произошла ошибка");
                         }   
                 },
        showMyDb: function(hidden) {
                if (!hidden) {
                console.log(personalMovieDB);
                     }
                  },
        toggleVisibleMyDB: function() {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false;
            } else {
                personalMovieDB.privat = true;
            }
        },       
        writeYourGenres: function() {
                for (let i = 1; i <= 3; i++) {
                    
                const genre = prompt(`Ваш любимый жанр под номером ${i}`);
                
                if (genre === '' || genre == null) {
                            console.log('Вы ввели некоректные данные');
                        } else {
                            personalMovieDB.genres[i - 1] = genre;
                        }
                     }
                     personalMovieDB.genres.forEach((item,i) => {
                        console.log(`люимый номер ${i + 1} - это ${item}`);
                     });
                 }
    };
   

