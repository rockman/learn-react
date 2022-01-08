import { useState } from "react";

const SignMeUp = ({ signupCallback }) => {

    const [email, setEmail] = useState("");

    return (
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
    );
}
 
export default SignMeUp;