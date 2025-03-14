import React from "react";

const ListEmployeeComponent = () => {
  const dummyData = [
    {
      id: 1,
      firstName: "Hieu",
      lastName: "Bui",
      email: "Buiminhiieu@gmail.com",
    },
    {
      id: 2,
      firstName: "Hieu",
      lastName: "Bui",
      email: "Buiminhiieu@gmail.com",
    },
  ];
  return (
    <div className="container">
      <h2>List of Employee</h2>
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
          {dummyData.map((employee) => (
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
