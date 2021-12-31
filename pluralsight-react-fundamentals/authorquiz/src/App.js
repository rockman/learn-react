
import "./bootstrap.min.css"
import { Link } from "react-router-dom";
import "./App.css"
import Hero from "./hero";
import Turn from "./turn";
import Continue from "./continue";
import Footer from "./footer";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    turn: state.turn,
    selectionClassName: state.selectionClassName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAnswer: (book) => {
      dispatch({ type: "turn/answer", book: book });
    },
    onContinue: () => {
      dispatch({ type: "turn/continue" });
    }
  };
}

function AppCore({ turn, selectionClassName, onAnswer, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turn} selectionClassName={selectionClassName} onAnswer={onAnswer} />
      <Continue show={selectionClassName === "correct"} onContinue={onContinue} />
      <Link to="/addauthor">Add Author</Link>
      <Footer />
    </div>
  );
}

const App = connect(mapStateToProps, mapDispatchToProps)(AppCore);

export default App;
