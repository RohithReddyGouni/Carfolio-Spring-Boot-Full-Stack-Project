package javalearn.spring.dao;

import org.springframework.data.repository.CrudRepository;

import javalearn.spring.model.Car;

public interface ICarRepository extends CrudRepository<Car, Integer>{

}
