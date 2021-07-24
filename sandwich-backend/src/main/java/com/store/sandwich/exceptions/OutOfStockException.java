package com.store.sandwich.exceptions;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.text.MessageFormat;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE)
@Getter
@Setter
public class OutOfStockException extends RuntimeException {

    private Integer errorCode;
    private String message;

    public OutOfStockException(String name) {
        this.setMessage(MessageFormat.format(ErrorCodes.OUT_OF_STOCK.getMessage(), name));
        this.setErrorCode(ErrorCodes.OUT_OF_STOCK.getCode());
    }

}
