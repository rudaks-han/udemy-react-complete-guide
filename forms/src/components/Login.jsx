import { useRef, useState } from "react";

export default function Login() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailValid = enteredEmail.includes("@");
    if (!emailValid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(true);
    console.log("Sending Http Request...");
  }

  /*function handleInputChange(identifier, event) {
    setEnteredValues((prevState) => ({
      ...prevState,
      [identifier]: event.target.value,
    }));
  }

  function handleEmailChange(event) {
    handleInputChange("email", event.target.value);
  }

  function handlePasswordChange(event) {
    handleInputChange("password", event.target.value);
  }*/

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && "Please entere a valid email address"}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
