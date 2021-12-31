import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import AddAuthor from './addauthor';


const initialAuthors = [
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
];


function getTurnData(authors) {
  const allBooks = authors.flatMap(author => author.books);
  const fourRandomBooks = _.shuffle(allBooks).slice(0, 4);
  const answer = _.sample(fourRandomBooks);

  return {
    author: authors.find(author => author.books.some(book => book === answer)),
    books: fourRandomBooks
  }
}

function actionUserHasAnswered(state, action) {
  const selectionClassName = selectionClassNameForAnswer(state.turn.author, action.book);
  return {
    ...state,
    selectionClassName: selectionClassName
  };
}

function actionUserRequestedNextTurn(state) {
  return {
    ...state,
    turn: getTurnData(state.authors),
    selectionClassName: ''
  }
}

function actionAddAuthor(state, action) {
  const author = {
    ...action.author,
    url: null,
  };
  const newAuthors = [...state.authors, author];
  return {
    authors: newAuthors,
    turn: getTurnData(newAuthors),
    selectionClassName: ''
  };
}

const initialState = {
  authors: initialAuthors,
  turn: getTurnData(initialAuthors),
  selectionClassName: ''
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "turn/answer":
      return actionUserHasAnswered(state, action);

    case "turn/continue":
      return actionUserRequestedNextTurn(state);
    
    case "authors/add":
      return actionAddAuthor(state, action);

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function isAnswerCorrect(author, book) {
  return author.books.some(b => b === book);
}

function selectionClassNameForAnswer(author, book) {
  if (!book) {
    return '';
  }

  return isAnswerCorrect(author, book) ? 'correct' : 'incorrect';
}


const AddAuthorWrapperCore = ({dispatch}) => {
  const navigate = useNavigate();
  
  function onAddAuthor(name, books) {
    dispatch({ type: "authors/add", author: { name, books }})
    navigate("/");
  }

  return <AddAuthor onAddAuthor={onAddAuthor} />
}

const AddAuthorWrapper = connect(null)(AddAuthorWrapperCore);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/addauthor" element={<AddAuthorWrapper />} />
        </Routes>        
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

