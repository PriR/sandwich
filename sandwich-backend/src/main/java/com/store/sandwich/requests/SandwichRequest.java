package com.store.sandwich.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class SandwichRequest {

    private Long id;
    private String breadType;
    private String breadSize;
    private List<String> vegetables; // string json list
    private List<String> sauces; // string json list
    private List<String> toppings; // string json list
}
