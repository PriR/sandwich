package com.store.sandwich.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.text.MessageFormat;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class IngredientNotFoundException extends RuntimeException {

    public IngredientNotFoundException(Integer id) {
        super(MessageFormat.format("Ingredient with id {0} not found", id));
    }

}
