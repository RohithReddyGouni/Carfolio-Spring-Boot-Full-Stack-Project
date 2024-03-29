package javalearn.spring.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CarNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public CarNotFoundException(String message) {
		super(message);
	}
}
