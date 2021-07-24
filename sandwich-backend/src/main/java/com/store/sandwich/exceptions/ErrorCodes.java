package com.store.sandwich.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorCodes {

    INGREDIENT_NOT_FOUND(4000, "Ingredient with id {0} not found"),
    OUT_OF_STOCK(4001, "Ingredient {0} is out of stock");

    private int code;
    private String message;

}


