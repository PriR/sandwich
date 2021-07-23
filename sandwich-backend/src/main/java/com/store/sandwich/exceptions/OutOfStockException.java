package com.store.sandwich.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.text.MessageFormat;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
public class OutOfStockException extends RuntimeException {

    public OutOfStockException(String name) {
        super(MessageFormat.format("Ingredient {0} is out of stock", name));
    }

}
