import React, { useState, useEffect } from "react";
import { getCars, deleteCarById } from "../services/CarService";
import { useNavigate } from "react-router-dom";

function ListCarComponent() {
  //employees <----setEmployees()
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //Calling API From BackEnd to get the data of Employees
    getCars().then((carData) => {
      //Inject data to employees varaible
      setCars(carData.data);
    });
  }, []);

  const addCar = () => {
    navigate("/add-car");
  };

  const editCar = (id) => {
    console.log("id:: " + id);
    navigate(`/update-car/${id}`);
  };

  const deleteCar = (id) => {
    console.log("id:: " + id);

    //Make a call to backend to delete the record
    deleteCarById(id).then((res) => {
      //display the same page with the record not matching with the supplied id value
      setCars(cars.filter((carData) => carData.id !== id));
    });
  };

  return (
    <div className="m-4">
      <h2 className="text-center">Cars List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addCar}>
          ADD CAR
        </button>
      </div>
      <br />

      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Car Name</th>
              <th> Car Manufactured Country</th>
              <th> Car Price</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td> {car.carname}</td>
                <td> {car.countrydeveloped}</td>
                <td> {car.price}</td>

                <button
                  onClick={() => editCar(car.id)}
                  className="btn btn-info"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteCar(car.id)}
                  className="btn btn-danger ml-2"
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ListCarComponent;
