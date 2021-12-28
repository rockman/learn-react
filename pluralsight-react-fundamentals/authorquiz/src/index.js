import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import App from './App';
import reportWebVitals from './reportWebVitals';

const authors = [
  {
    name: "Mark Twain",
    url: "images/authors/marktwain.jpg",
    books: ["The Adventures of Huckleberry Finn"]
  },
  {
    name: "J. K. Rowling",
    url: "images/authors/jkrowling.jpg",
    books: ["Harry Potter"]
  },
  {
    name: "Stephen King",
    url: "images/authors/king.jpg",
    books: ["It", "The Stand"]
  },
  {
    name: "William Shakespeare",
    url: "images/authors/shakespeare.jpg",
    books: ["Hamlet", "MacBeth", "Romeo and Juliet"]
  }
]

const NUMBER_CHOICES = 5;

function getTurnData(authors) {

  const allBooks = authors.flatMap(author => author.books);
  const fourRandomBooks = _.shuffle(allBooks).slice(0, 4);
  const answer = _.sample(fourRandomBooks);

  return {
    author: authors.find(author => author.books.some(book => book === answer)),
    books: fourRandomBooks
  }
}

const state = {
  turn: getTurnData(authors)
}

ReactDOM.render(
  <React.StrictMode>
    <App {...state} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
