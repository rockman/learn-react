import Home from "./home";
import Speakers from "./Speakers";

const App = ({ pageName }) => {
    switch (pageName) {
        case "Home":
            return <Home />;

        case "Speakers":
            return <Speakers />;

        default:
            return <div>Not Found</div>
    }
}


export default App;