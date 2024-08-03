"use strict";

let countOfFilms;

// init();

const DB = {
  count: countOfFilms,
  movies: {},
  actors: {},
  genres: [],
  status: null,
  privat: false
};

function init() {
  countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");

  while (countOfFilms == "" || countOfFilms == null || isNaN(countOfFilms)) {
    countOfFilms = +prompt("Քանի՞ ֆիլմ եք վերջերս դիտել");
  }
}

function rememberAndCreateUserFilms() {
  for (let i = 0; i < 2; i++) {
    const filmName = prompt("Ո՞ր ֆիլմն եք վերջերս դիտել");
    const filmRate = +prompt(`Ինչքա՞ն եք գնահատում ${filmName} ֆիլմը`);

    if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length < 50) {
      DB.movies[filmName] = filmRate;
      console.log("Resolve");
    } else {
      console.log("Reject");
      i--;
    }
  }
}

function detectUserPersonalLevel() {
  if (DB.count < 10) {
    DB.status = "Դուք դիտել եք բավականին քիչ ֆիլմեր";
  } else if (DB.count >= 10 && DB.count < 30) {
    DB.status = "Դուք դասական ֆիլմ դիտող եք";
  } else if (DB.count >= 30) {
    DB.status = "Դուք կինոման եք !"
  } else {
    console.log("Տեղի է ունեցել խնդիր․");
  }
}

function checkDBPrivatStatus(state) {
  state ? console.log("Sorry but DB is not visible") : console.log(DB);
}

function useFavoriteGenres() {
  for (let i = 0; i < 2; i++) {
    DB.genres.push(prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`))
  }
}

// rememberAndCreateUserFilms();
// useFavoriteGenres();
// detectUserPersonalLevel();
// checkDBPrivatStatus(DB.privat);