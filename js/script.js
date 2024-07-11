"use strict";

const countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genrer: [],
  privat: false
};

const a = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
const b = +prompt("Ինչքա՞ն եք գնահատում այդ ֆիլմը");
const c = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
const d = +prompt("Ինչքա՞ն եք գնահատում այդ ֆիլմը");

DB.movies[a] = b;
DB.movies[c] = d;

console.log(DB);