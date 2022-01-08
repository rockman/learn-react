
import SignMeUp from "./SignMeUp";


const Header = () => {

    const signupCallback = (email) => {
        console.log(`Sign up called with email: ${email}`)
    }

    return (
        <div className="bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Code Conference</h1>
                <SignMeUp signupCallback={signupCallback} />
            </div>
        </div>
    );
}
 
export default Header;