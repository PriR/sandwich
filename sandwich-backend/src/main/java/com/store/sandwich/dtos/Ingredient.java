package com.store.sandwich.dtos;

import lombok.Data;

@Data
public class Ingredient {

    private Integer id;
    private String name;
    private Double price;
    private Integer quantity;
    private String type;
}
