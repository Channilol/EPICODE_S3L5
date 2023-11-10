/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: 'Francesco',
  surname: 'Cannizzo',
  age: 25,
}

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete(me.age)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['HTML', 'CSS', 'JS']

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('me')

console.log(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop()

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  const numeroRandom = Math.floor(Math.random() * 6) + 1
  return numeroRandom
}

console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(parametro1, parametro2){
  if (parametro1 >= parametro2){
    return parametro1
  }
  else {
    return parametro2
  }
}

console.log(whoIsBigger(15,10))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(parametro) {
  const stringaSplit = parametro.split(' ')
  return stringaSplit
}

console.log(splitMe('Ciao sono Francesco studente di Epicode'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(stringa, booleano){
  let stringaTagliata
  if (booleano === 'true') {
    stringaTagliata = stringa.slice(1)
  }
  else {
    stringaTagliata = stringa
  }
  return stringaTagliata
}

console.log(deleteOne('ciao','true'))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(stringa) {
  let stringaNoNumeri
  stringaNoNumeri = stringa.replace(/\d+/g, '')
  stringaNoNumeri = stringaNoNumeri.replace(/\s+/g, ' ');
  return stringaNoNumeri
}

console.log(onlyLetters('I have 4 dogs'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(stringa){
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(stringa);
}

console.log(isThisAnEmail('ciaociao'))
console.log(isThisAnEmail('ciaociao@gmail.it'))

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt(){
  let dataOggi = new Date()
  let giorno = dataOggi.getDay()
  switch (giorno) {
    case 0:
      giorno = 'Domenica'
    break
    case 1:
      giorno = 'Lunedì'
    break
    case 2:
      giorno = 'Martedì'
    break
    case 3:
      giorno = 'Mercoledì'
    break
    case 4:
      giorno = 'Giovedì'
    break
    case 5:
      giorno = 'Venerdì'
    break
    case 6:
      giorno = 'Sabato'
    break
  }
  return giorno
}

console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const somma = {
  sum : 0,
  values : []
}

function rollTheDices(parametro) {
  for (let i = 0; i < parametro; i++){
    let diceRoll = dice()
    somma.values.push(diceRoll)
    somma.sum += diceRoll
  }
  return somma
}

console.log(rollTheDices(5))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(inputData) {
  const currentDate = new Date()
  const inputDateObject = new Date(inputData);
  const timeDifference = currentDate - inputDateObject
  const daysElapsed = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); //divido il risultato di timeDifference (dato in millisecondi) per il numero di millisecondi in un giorno e poi approssimo per difetto per creare un numero intero di giorni trascorsi
  return daysElapsed;
}

console.log(howManyDays('2022-11-10'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday() {
  const mioCompleanno = '0814'
  const dataOggi = new Date()
  const meseOggi = (dataOggi.getMonth() + 1).toString()
  const giornoOggi = dataOggi.getDate().toString()
  const checkCompleanno = meseOggi + giornoOggi
  if (checkCompleanno === mioCompleanno) {
    console.log('AUGURI DI BUON COMPLEANNO!!!')
  }
  else {
    console.log('Oggi non è ancora il tuo compleanno')
  }
}

isTodayMyBirthday()

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto, stringa) {
    delete oggetto[stringa]
  return oggetto
}


/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const moviesYear = []

function newestMovie() {
  for (let i = 0; i < movies.length; i++) {
    let movieYear = movies[i].Year
    moviesYear.push(movieYear)
  }
  moviesYear.sort()
  console.log(moviesYear[0])
}



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  let totalMovies = 0
  for (let i = 0; i < movies.length; i++) {
    totalMovies += 1
  }
  return totalMovies
}



/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  const yearArray = []
  for (let i = 0; i < movies.length; i++) {
    let annoFilm = movies[i].Year
    yearArray.push(annoFilm)
  }
  return yearArray
}



/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  const newMoviesArray = [...movies]
  for (let i = 0; i < newMoviesArray.length; i++) {
    if (newMoviesArray[i].Year < 2000) {
      delete(newMoviesArray[i])
    }
  }
  return newMoviesArray
}



/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears() {
  let sommaAnni = 0
  for (let i = 0; i < movies.length; i++) {
    let annoStringa = movies[i].Year
    let annoNumero = Number(annoStringa)
    sommaAnni += annoNumero
  }
  return sommaAnni
}

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(stringa) {
  const movies2 = [...movies]
  for (let i = 0; i < movies2.length; i++) {
    let movieTitle = movies2[i].Title.toLowerCase()
    if (movieTitle.includes(stringa)) {
    }
    else {
      delete movies2[i]
    }
  }
  return movies2
}



/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(stringa) {
  let match = []
  let unmatch = []
  const movies2 = [...movies]
  for (let i = 0; i < movies2.length; i++) {
    let movieTitle = movies2[i].Title.toLowerCase()
    if (movieTitle.includes(stringa)) {
      match.push(movies2[i])
    }
    else {
      unmatch.push(movies2[i])
    }
  }
  console.log(match)
  console.log(unmatch)
}



/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(numero) {
  for (let i = 0; i < movies.length; i++) {
    if (numero === i) {      
      movies.splice(numero, 1)
    }
  }
  return movies
}

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]



let filmDaModificare = movies[4]
let filmModificato = deleteProp(filmDaModificare, 'Poster')
console.log(filmModificato) //11
newestMovie() //12
console.log(countMovies()) //13
console.log(onlyTheYears()) //14
console.log(onlyInLastMillennium()) //15
console.log(sumAllTheYears()) //16
console.log(searchByTitle('avengers')) //17
searchAndDivide('rings') //18
console.log(removeIndex(3)) //Es19

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const container = () => {
  container = document.getElementById('container')
}


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const allTd = () => {
  allTd = document.getElementsByTagName('td')
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const contenutoTD = () => {
  const allTd = document.getElementsByTagName('td')
  for (let i = 0; i < allTd.length; i++) {
    console.log(allTd[i].textContent)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const linkBG = () => {
  const allLinks = document.querySelectorAll('a')
  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.backgroundColor = 'red'
  }
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addListItem = () => {
  const ul = document.getElementById('myList')
  const li = document.createElement('li')
  li.innerText = 'Nuovo elemento li'
  ul.appendChild(li)
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const deleteListItems = () => {
  const ul = document.getElementById('myList')
  while (ul.firstChild) //finchè c'è un primo figlio di ul
    ul.removeChild(ul.firstChild) //rimuovi primo figlio di ul
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassToTR = () => {
  const tr = document.querySelectorAll('tr')
  tr.forEach(element => {
    element.classList.add('test')
  });
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(altezza) {
  const singoloAsterisco = '*'
  let stringaAsterischi = ''
  const body = document.querySelector('body')
  for (let i = 0; i <= altezza; i++) {
    const paragraph = document.createElement('p')
    paragraph.innerText = stringaAsterischi
    stringaAsterischi += singoloAsterisco
    body.appendChild(paragraph)
  }
}

halfTree(5)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****
*/

function tree(altezza) {

  const singoloAsterisco = '*'
  let stringaAsterischi = ''
  const body = document.querySelector('body')
  const alberoCentrato = document.createElement('div')
  const puntaAlbero = document.createElement('p')

  alberoCentrato.style.textAlign = 'center'
  puntaAlbero.innerText = singoloAsterisco
  alberoCentrato.appendChild(puntaAlbero)
  body.appendChild(alberoCentrato)

  for (let i = 0; i < (altezza - 1); i++) {
    const paragraph = document.createElement('p')
    stringaAsterischi = stringaAsterischi + singoloAsterisco + singoloAsterisco + singoloAsterisco
    paragraph.innerText = stringaAsterischi
    alberoCentrato.appendChild(paragraph)
  }
}

tree(5)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(numero) {
  if (numero <= 1) {
    return 'un numero <= 1 non può essere primo';
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) { //un numero non è primo se è divisibile per un valore intero pari ad un valore minore della sua radice quadrata, let i parte da 2 perchè è il primo numero primo esistente
    if (numero % i === 0) {
      return 'non è un numero primo';
    }
  }
  return 'è un numero primo'
}


console.log(isItPrime(7))
console.log(isItPrime(20))
console.log(isItPrime(0))