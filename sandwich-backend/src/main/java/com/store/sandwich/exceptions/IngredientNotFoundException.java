package com.store.sandwich.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.text.MessageFormat;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
@Getter
@Setter
public class IngredientNotFoundException extends RuntimeException {

    private Integer errorCode;
    private String message;

    public IngredientNotFoundException(Integer id) {
        this.setMessage(MessageFormat.format(ErrorCodes.INGREDIENT_NOT_FOUND.getMessage(), id.toString()));
        this.setErrorCode(ErrorCodes.INGREDIENT_NOT_FOUND.getCode());
    }

}
