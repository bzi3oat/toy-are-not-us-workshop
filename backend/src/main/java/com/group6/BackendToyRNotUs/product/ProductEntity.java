package com.group6.BackendToyRNotUs.product;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tb_product")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    private String gender;

    private String age;

    private Double price;

    private String availability;

    private String brand;

    private Integer quantity;

    public ProductEntity() {
    }

    public ProductEntity(ProductModel model) {
        this.id = model.getId();
        this.name = model.getName();
        this.gender = model.getGender();
        this.age = model.getAge();
        this.price = model.getPrice();
        this.availability = model.getAvailability();
        this.brand = model.getBrand();
        this.quantity = model.getQuantity();
    }
}
