// "use strict";

const numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний посмотренный фильм?", "");
const b = prompt("Оцените этот фильм?", "");
const c = prompt("Последний посмотренный фильм?", "");
const d = prompt("Оцените этот фильм?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);