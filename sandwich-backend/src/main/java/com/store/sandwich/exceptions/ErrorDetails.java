package com.store.sandwich.exceptions;

import lombok.*;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
public class ErrorDetails {

    private Date timestamp;
    private String message;
    private int code;

}
