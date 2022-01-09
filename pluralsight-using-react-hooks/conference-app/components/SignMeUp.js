import { useState, useContext } from "react";
import { ConfigContext } from "./App";

const SignMeUp = ({ signupCallback }) => {

    const [email, setEmail] = useState("");

    const context = useContext(ConfigContext);

    return (
        <>
        {context.showSignMeUp ?
        <div>
            <input placeholder="Enter Email" type="email" name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />
            <button className="btn" type="submit"
                disabled={!email.includes("@")}
                onClick={() => {
                    signupCallback(email);
                    setEmail("");
                    alert("signup confirmed");
                }}
            >Get Updates</button>
        </div>
        : <></>}
        </>
    )
    
}
 
export default SignMeUp;