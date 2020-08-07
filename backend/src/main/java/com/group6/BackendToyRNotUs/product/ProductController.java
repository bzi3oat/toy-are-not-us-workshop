package com.group6.BackendToyRNotUs.product;

import com.group6.BackendToyRNotUs.exception.ProductNotFoundException;
import com.group6.BackendToyRNotUs.response.ResponseModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@ControllerAdvice
@CrossOrigin
@RequestMapping("/api/v1/products")
public class ProductController {
	@Autowired
	private ProductService productService;

	@ExceptionHandler(value = ProductNotFoundException.class)
	public ResponseEntity<?> productNotFoundExceptionHandle(ProductNotFoundException e) {
		return new ResponseEntity<>(new ResponseModel(false, e.getMessage()), HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(value = Exception.class)
	public ResponseEntity<?> exceptionHandle(Exception e) {
		return new ResponseEntity<>(new ResponseModel(false, e.getMessage()), HttpStatus.NOT_FOUND);
	}

	@PostMapping("")
	public ResponseEntity<?> addProduct(@RequestBody ProductEntity entity) {
		return new ResponseEntity<>(productService.add(entity), HttpStatus.CREATED);
	}

	@PostMapping("/addAll")
	public ResponseEntity<?> addAllProduct(@RequestBody List<ProductEntity> entity) {
		return new ResponseEntity<>(productService.addAll(entity), HttpStatus.CREATED);
	}

	@GetMapping("")
	public ResponseEntity<?> findAllByValue(@RequestParam(required = false, defaultValue = "") String age,
			@RequestParam(required = false, defaultValue = "") String gender,
			@RequestParam(defaultValue = "1", required = false) int page,
			@RequestParam(defaultValue = "15", required = false) int itemPerPage) {

//		Pageable pageable = PageRequest.of(--page, itemPerPage);
//        return new ResponseEntity<>(productService.findAllByPage(age, gender, pageable), HttpStatus.OK);

		List<ProductEntity> res = new ArrayList<ProductEntity>();
		if (age.isEmpty() && gender.isEmpty())
			res = productService.findAll();
		else
			res = productService.findAllByAgeGender(age, gender);
		return new ResponseEntity<>(res, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> findById(@PathVariable Long id) throws Exception, ProductNotFoundException {
		return new ResponseEntity<>(productService.findOneById(id), HttpStatus.OK);
	}
}
