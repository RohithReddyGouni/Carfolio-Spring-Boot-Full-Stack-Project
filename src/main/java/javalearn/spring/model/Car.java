package javalearn.spring.model;

import jakarta.persistence.*;

@Entity
@Table(name ="carsdetails")
public class Car {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name="car_name")
	private String carname;
	
	@Column(name="country_developed")
	private String countrydeveloped;
	
	@Column(name="car_price")
	private float price;
	
	
	
	

	public Car() {
		System.out.println("Car Details :: Zero Param Construtctor");
	}

	public Car(String carname, String countrydeveloped, float price) {
		
		this.carname = carname;
		this.countrydeveloped = countrydeveloped;
		this.price = price;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCarname() {
		return carname;
	}

	public void setCarname(String carname) {
		this.carname = carname;
	}

	public String getCountrydeveloped() {
		return countrydeveloped;
	}

	public void setCountrydeveloped(String countrydeveloped) {
		this.countrydeveloped = countrydeveloped;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	@Override
	public String toString() {
		return "Car [id=" + id + ", carname=" + carname + ", countrydeveloped=" + countrydeveloped + ", price=" + price
				+ "]";
	}
	
	

}
