'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "бЛоган",
            "аЛига справедливости",
            "сЛа-ла лэнд",
            "яОдержимость",
            "гСкотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

          //Чтобы отследить отправку нашей формы есть обработчик сабмит
          addForm.addEventListener('submit', (event) => {
                event.preventDefault(); //Отменить стандартное поведение браузера при нажатии на кнопку отправить - страничка не будет перезагружаться

                const newFilm = addInput.value;
                const favorite = checkbox.checked;

                if(newFilm) {
                    if (newFilm.length > 21) {
                        newFilm = `${newFilm.substring(0, 22)}...`;
                    }

                    if (favorite) {
                        console.log('Добавляем люимый фильм');
                    }
                    movieDB.movies.push(newFilm);
                    sortArr(movieDB.movies);    
                    createMovieList(movieDB.movies, movieList);
                }
                
                addForm.reset();
             });
    
    
    
    const deleteAdv = (arr) => {
        arr.forEach( item => {
            item.remove();
        });
    };
    
    

    const makeChanges = () => {
        genre.innerHTML = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
         
    };

 

    const sortArr = (arr) => {
        
    arr.sort();

    };

    

    function createMovieList(films, parent) {
        sortArr(movieDB.movies);
        parent.innerHTML = '';   
        //console.log(poster.innerHTML); получить верстку
        films.forEach((film,i) => {
            parent.innerHTML += 
            `<li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
            </li>`;
        });
        
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(movieDB.movies, movieList);//ПРи удаление список обнуляется
            });
        });
    }


    deleteAdv(adv);
    makeChanges();
    
    createMovieList(movieDB.movies, movieList);









} );


