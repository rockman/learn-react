import { createContext } from "react";

import Home from "./home";
import Speakers from "./Speakers";


function pageToShow(pageName) {
    switch (pageName) {
        case "Home":
            return <Home />;

        case "Speakers":
            return <Speakers />;

        default:
            return <div>Not Found</div>
    }
}

const configValue = {
    showSignMeUp: true,
    showSpeakingDays: true
}

const App = ({ pageName }) => (
    <ConfigContext.Provider value={configValue}>
        {pageToShow(pageName)}
    </ConfigContext.Provider>
)

export const ConfigContext = createContext();

export default App;