package javalearn.spring.service;

import java.util.List;

import javalearn.spring.model.Car;

public interface ICarService {
	
	public List<Car> findAllCars();
	
	public Car saveCar(Car car);
	
	public Car findCarById(Integer id);
	
	public void deleteCarById(Integer id);

}
