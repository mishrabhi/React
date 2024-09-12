import React, { useRef, useState } from "react";

const DynamicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateInput = (inputName, value) => {
    let error = "";
    if (inputName === "name" && value.length < 3) {
      error = "Name must be atleast 3 characters";
    } else if (inputName === "email") {
      if (!value.includes("@") || !value.includes(".")) {
        error = "Please enter an valid email";
      }
    } else if (inputName === "password" && value.length < 6) {
      error = "Password must be atleast 6 characters long";
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const error = validateInput(name, value);

    setFormErrors((prev) => ({ ...prev, [name]: error }));
    console.log(`${name}: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!formErrors.name && !formErrors.email && !formErrors.password) {
      console.log("Form Data:", { name, email, password });
    } else {
      console.log("Please fill all the fields correctly");
    }
  };

  return (
    <div>
      <h2>Dynamic Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            ref={nameRef}
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            ref={emailRef}
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            ref={passwordRef}
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DynamicForm;
