package javalearn.spring.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javalearn.spring.model.Car;
import javalearn.spring.service.ICarService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/api/v1")
public class CarController {
	
	@Autowired
	private ICarService service;
	
	
	@GetMapping("/cars")
	public List<Car> getAllCars(){
		return service.findAllCars();
	}
	
	@PostMapping("/cars")
	public Car createCar(@RequestBody Car car) {
		return service.saveCar(car);
	}
	
	
	@GetMapping("/cars/{id}")
	public ResponseEntity<Car> getCarById(@PathVariable Integer id) {
		Car car = service.findCarById(id);
		
		return ResponseEntity.ok(car);
	}
	
	
	@PutMapping("/cars/{id}")
	public ResponseEntity<Car> updateCar(@PathVariable Integer id, @RequestBody Car car){
		Car carDb = service.findCarById(id);
		carDb.setCarname(car.getCarname());
		carDb.setCountrydeveloped(car.getCountrydeveloped());
		carDb.setPrice(car.getPrice());
		
		
		Car updateCar = service.saveCar(carDb);
		return ResponseEntity.ok(updateCar);
	}
	
	
	@DeleteMapping("/cars/{id}")
	public ResponseEntity<?> deleteCar(@PathVariable Integer id){
		service.deleteCarById(id);
		HashMap<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
