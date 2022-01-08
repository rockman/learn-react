import Home from "./home";

const App = ({ pageName }) => {
    switch (pageName) {
        case "Home":
            return <Home />;

        default:
            return <div>Not Found</div>
    }
}


export default App;