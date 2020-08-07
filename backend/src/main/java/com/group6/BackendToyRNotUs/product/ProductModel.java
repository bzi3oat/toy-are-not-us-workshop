package com.group6.BackendToyRNotUs.product;

import lombok.Data;

@Data
public class ProductModel {

    private Long id;

    private String name;

    private String gender;

    private String age;

    private Double price;

    private String availability;

    private String brand;

    private Integer quantity;

    private Integer amount;
}
