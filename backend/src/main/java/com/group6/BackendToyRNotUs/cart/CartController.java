package com.group6.BackendToyRNotUs.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.group6.BackendToyRNotUs.RoleCartToProduct.RoleCartToProductEntity;
import com.group6.BackendToyRNotUs.RoleCartToProduct.RoleCartToProductService;
import com.group6.BackendToyRNotUs.product.ProductModel;

@ControllerAdvice
@CrossOrigin
@RequestMapping("/api/v1/cart")
public class CartController {
	@Autowired
	private CartService cartService;
	@Autowired
	private RoleCartToProductService cartToProductService;

	@PostMapping("")
	public ResponseEntity<?> add(@RequestBody ProductModel model) {
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> add(@PathVariable Long id) {
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
