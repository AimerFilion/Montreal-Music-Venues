import { useState } from "react";

const Login = () => {
  // Store an object with an error message and the name of the field.
  const [errorMessages, setErrorMessages] = useState({});
  //boolean value to indicate if the form is successfully submitted or not.
  const [isSubmitted, setIsSubmitted] = useState(false);

  const printErrorMessage = (name) => {
    name === errorMessages.name && <div>{errorMessages.message}</div>;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" required>
          {printErrorMessage("username")}
        </input>
        <label>Password</label>
        <input type="password" name="password" required>
          {printErrorMessage("password")}
        </input>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
