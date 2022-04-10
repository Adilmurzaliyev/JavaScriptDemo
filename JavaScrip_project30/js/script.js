

'use strict';

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Алла",
            "Алло"
        ]
    };
    
    const advert = document.querySelectorAll(".promo__adv img"),
          poster = document.querySelector(".promo__bg"),
          genre = poster.querySelector(".promo__genre"),
          filmList = document.querySelector(".promo__interactive-list"),
          addForm = document.querySelector("form.add"),
          addFilm = addForm.querySelector(".adding__input"),
          checkbox = addForm.querySelector("[type='checkbox']");

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addFilm.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 20) {
                newFilm = `${newFilm.substring(0, 21)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);

            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, filmList);
        }

        event.target.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    deleteAdv(advert);
    
    const makeChanges = () => {
        genre.textContent = "Драма";
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };

    sortArr(movieDB.movies);
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";

        // sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.slice(i, 1);

                // createMovieList(films, parent);
            });
            
        });
    }

    createMovieList(movieDB.movies, filmList);
});