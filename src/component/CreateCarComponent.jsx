import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCar } from "../services/CarService";

function CreateCarComponent() {
  //React hook which will be used to render the page
  const [car, setCar] = useState({
    carname: "",
    countrydeveloped: "",
    price: "",
  });

  const navigate = useNavigate();

  const changeCarNameHandler = (event) => {
    setCar({ ...car, carname: event.target.value });
  };

  const changeManufacturedCountryHandler = (event) => {
    setCar({ ...car, countrydeveloped: event.target.value });
    console.log("country developed ", event.countrydeveloped);
  };

  const changePriceHandler = (event) => {
    setCar({ ...car, price: event.target.value });
  };

  const saveOrUpdateEmployee = (e) => {
    //Display the output values on the console to check whether it is coming or not
    e.preventDefault();
    console.log("Car => " + JSON.stringify(car));

    //Actual code which will call the services from backend and re-direct to main page
    createCar(car).then((res) => {
      navigate("/cars"); // Use navigate
    });
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Add CAR</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Car Name: </label>
                  <input
                    placeholder="Car Name"
                    name="carname"
                    className="form-control"
                    value={car.carname}
                    onChange={changeCarNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Car Manufactured Country: </label>
                  <input
                    placeholder="Car Manufactured Country"
                    name="countrydeveloped"
                    className="form-control"
                    value={car.countrydeveloped}
                    onChange={changeManufacturedCountryHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Car Price: </label>
                  <input
                    placeholder="Car price"
                    name="price"
                    className="form-control"
                    value={car.price}
                    onChange={changePriceHandler}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={saveOrUpdateEmployee}
                >
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCarComponent;
