

"use strict";

let numberOfFilms;

function start() {
    personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", "");

    while (personalMovieDB.count == "" || 
    personalMovieDB.count == null || isNaN(personalMovieDB.count)){
        numberOfFilms = +prompt("Сколько фильмов Вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("Последний посмотренный фильм?", ""),
              b = prompt("Оцените этот фильм?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }  
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB >=30) {
        console.log("Вы киноман");
    } else {
        console.log ("error");
    }
}

detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
       const d = prompt(`Ваш любимый жанр под номером ${i}`);
       personalMovieDB.genres[i-1] = d;
    }
}

writeYourGenres();

