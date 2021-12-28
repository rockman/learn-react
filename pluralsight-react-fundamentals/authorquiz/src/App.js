
import "./bootstrap.min.css"
import "./App.css"
import Hero from "./hero";
import Turn from "./turn";
import Continue from "./continue";
import Footer from "./footer";

function App({ turn }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turn} />
      <Continue />
      <Footer />
    </div>
  );
}

export default App;
