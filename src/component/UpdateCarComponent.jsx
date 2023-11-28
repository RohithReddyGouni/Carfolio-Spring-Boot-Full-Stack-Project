import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarById, updateCar } from "../services/CarService";

function UpdateCarComponent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [car, setCar] = useState({
    id: id,
    carname: "",
    countrydeveloped: "",
    price: "",
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        //Calling the Backend api to load the data to the page based on id value
        const response = await getCarById(id);
        const carData = response.data;
        setCar({
          id: id,
          carname: carData.carName,
          countrydeveloped: carData.manufacturedCountry,
          price: carData.price,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchCar();
  }, [id]);

  const updateCarData = async (e) => {
    e.preventDefault();
    console.log(car);

    //Calling API to send the data to BackEnd to perform update operation
    await updateCar(car, id);
    navigate("/cars");
  };

  const changeCarNameHandler = (event) => {
    setCar({ ...car, carname: event.target.value });
  };

  const changeManufacturedCountryHandler = (event) => {
    setCar({ ...car, countrydeveloped: event.target.value });
  };

  const changePriceHandler = (event) => {
    setCar({ ...car, price: event.target.value });
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
            <h3 className="text-center">Update Car</h3>
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
                  <label> Car manufactured Country: </label>
                  <input
                    placeholder="Car Manufactured Country"
                    name="countrydeveloped"
                    className="form-control"
                    value={car.countrydeveloped}
                    onChange={changeManufacturedCountryHandler}
                  />
                </div>
                <div className="form-group">
                  <label> Price: </label>
                  <input
                    placeholder="car price"
                    name="price"
                    className="form-control"
                    value={car.price}
                    onChange={changePriceHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={updateCarData}>
                  update
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
export default UpdateCarComponent;
