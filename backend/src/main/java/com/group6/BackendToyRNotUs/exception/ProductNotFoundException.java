package com.group6.BackendToyRNotUs.exception;

public class ProductNotFoundException extends RuntimeException {

    static final long serialVersionUID = 1L;

    public ProductNotFoundException(String message) {
        super(message);
    }

    public ProductNotFoundException() {
        super();
    }
}
