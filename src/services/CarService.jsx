import axios from "axios";

const CARS_API_BASE_URL = "http://localhost:9999/api/v1/cars";

export const getCars = () => {
  return axios.get(CARS_API_BASE_URL);
};

export const createCar = (car) => {
  return axios.post(CARS_API_BASE_URL, car);
};

export function getCarById(carId) {
  return axios.get(`${CARS_API_BASE_URL}/${carId}`);
}

export function updateCar(car, carId) {
  return axios.put(`${CARS_API_BASE_URL}/${carId}`, car);
}

export function deleteCarById(carId) {
  return axios.delete(`${CARS_API_BASE_URL}/${carId}`);
}
