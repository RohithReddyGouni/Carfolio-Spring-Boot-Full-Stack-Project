package javalearn.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javalearn.spring.dao.ICarRepository;
import javalearn.spring.exception.CarNotFoundException;
import javalearn.spring.model.Car;

@Service("service")
public class CarServiceImpl implements ICarService {
	
	@Autowired
	private ICarRepository repo;
	
	
	@Override
	public List<Car> findAllCars(){
		return (List<Car>)repo.findAll();
	}
	
	
	@Override
	public Car saveCar(Car car) {
		return repo.save(car);
	}
	
	
	
	@Override
	public Car findCarById(Integer id) {
		Car car = repo.findById(id)
				 .orElseThrow(() -> new CarNotFoundException("Record not exist with the id:: "+id));
		
		return car;
	}
	
	
	@Override
	public void deleteCarById(Integer id) {
		Car car = repo.findById(id)
				.orElseThrow(() -> new CarNotFoundException("Record not exist with the id:: "+id));
		
		repo.delete(car);	
	}

}
