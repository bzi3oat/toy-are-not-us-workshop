package com.group6.BackendToyRNotUs.RoleCartToProduct;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "tb_cart_product")
public class RoleCartToProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long cart_id;

    private Long product_id;

    private Integer amount;
}
