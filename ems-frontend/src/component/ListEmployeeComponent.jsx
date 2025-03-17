import React, { useEffect, useState } from "react";
import { listEmployees } from "../service/EmployeeService";
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate()
  useEffect(() => {
    listEmployees()
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);
  function addEmployee(){
    navigator("/add-employee")
  }
  return (
    <div className="container">
      <h2>List of Employee</h2>
      <button className="btn btn-primary mb-2" onClick={addEmployee}>Add Employee</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee first name</th>
            <th>Employee Last name</th>
            <th>Employee Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
