import React, { useState } from "react";
import { createEmployee } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";
const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigator = useNavigate();

  function saveEmployee(e) {
    e.preventDefault();
    if (validatorForm()) {
      const employee = { firstName, lastName, email };
      createEmployee(employee).then((res) => {
        console.log(res.data);
        navigator("/employees");
      });
    }
  }

  function validatorForm() {
    let valid = true;
    const errorsCopy = { ...error };
    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }
    setError(errorsCopy);
    return valid;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Employee</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First name: </label>
                <input
                  type="text"
                  name="firstName"
                  value={firstName}
                  placeholder="Enter Employee first name"
                  className={`form-control ${
                    error.firstName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                {error.firstName && <div className="invalid-feedback">{error.firstName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last name: </label>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  placeholder="Enter Employee last name"
                  className={`form-control ${
                    error.lastName ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                 {error.lastName && <div className="invalid-feedback">{error.lastName}</div>}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">email: </label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Enter Employee email"
                  className={`form-control ${
                    error.email ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                {error.email && <div className="invalid-feedback">{error.email}</div>}
              </div>
              
             
            </form>
            <button className="btn btn-success" onClick={saveEmployee}>
                Submit
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
