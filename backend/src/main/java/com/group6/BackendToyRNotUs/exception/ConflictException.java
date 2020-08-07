package com.group6.BackendToyRNotUs.exception;

public class ConflictException extends RuntimeException{
    static final long serialVersionUID = 1L;

    public ConflictException(String message) {
        super(message);
    }

    public ConflictException() {
        super();
    }

}
