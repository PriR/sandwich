package com.store.sandwich.converters;

import com.store.sandwich.dtos.*;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;


@Component
public class ConverterIngredient {

    public <T> List<Ingredient> toIngredient(List<T> c) {
        List<Ingredient> ingredients = c.stream()
                .filter(Ingredient.class::isInstance)
                .map(Ingredient.class::cast)
                .collect(Collectors.toList());
        return ingredients;
    }

}