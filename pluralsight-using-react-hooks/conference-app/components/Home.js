
import Header from "./Header";
import Menu from "./Menu";


const Home = () => {
    return (
        <div>
            <Header />
            <Menu />

            <div className="container">
                <div className="row">
                    <div className="col marginbottom">
                        <h2>Home</h2>
                        <h6 className="marginbottom20">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
