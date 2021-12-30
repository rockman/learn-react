
import "./bootstrap.min.css"
import { Link } from "react-router-dom";
import "./App.css"
import Hero from "./hero";
import Turn from "./turn";
import Continue from "./continue";
import Footer from "./footer";

function App({ turn, selectionClassName, onAnswer, onContinue }) {
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

export default App;
