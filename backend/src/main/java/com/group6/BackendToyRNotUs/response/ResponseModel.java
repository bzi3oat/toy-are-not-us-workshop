package com.group6.BackendToyRNotUs.response;

import lombok.Data;

@Data
public class ResponseModel {
    private boolean status;

    private String message;

    public ResponseModel(boolean status, String message) {
        this.status = status;
        this.message = message;
    }
}
