package com.group6.BackendToyRNotUs.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;
}
