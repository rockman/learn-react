import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import App from './App';
import AddAuthor from './addauthor';

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

function getTurnData(authors) {

  const allBooks = authors.flatMap(author => author.books);
  const fourRandomBooks = _.shuffle(allBooks).slice(0, 4);
  const answer = _.sample(fourRandomBooks);

  return {
    author: authors.find(author => author.books.some(book => book === answer)),
    books: fourRandomBooks
  }
}

function isAnswerCorrect(author, book) {
  return author.books.some(b => b === book);
}

function selectionClassNameForAnswer(author, book) {
  if (!book) {
    return '';
  }

  return isAnswerCorrect(author, book) ? 'correct' : 'incorrect';
}

function onAnswer(book) {
  const result = selectionClassNameForAnswer(state.turn.author, book);
  state.selectionClassName = result;
  render();
}

function onContinue() {
  state = newState();
  render();
}

function addAuthor(name, books) {
  authors.push({
    name: name,
    url: null,
    books: books
  });  
}

function newState() {
   return {
    turn: getTurnData(authors),
    selectionClassName: selectionClassNameForAnswer(null, null)
  }
}

var state = newState();

const AddAuthorWrapper = () => {
  const navigate = useNavigate();
  
  function onAddAuthor(name, books) {
    addAuthor(name, books);
    navigate("/");
    state = newState();
  }

  return <AddAuthor onAddAuthor={onAddAuthor} />
};

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App {...state} onAnswer={onAnswer} onContinue={onContinue} />} />
          <Route path="/addauthor" element={<AddAuthorWrapper />} />
        </Routes>        
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );  
}

render();
reportWebVitals(console.log);
