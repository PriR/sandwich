package com.store.sandwich.services;

import com.store.sandwich.dtos.*;

import java.util.List;

public interface IngredientsService {

    List<Ingredient> getIngredient(String ingredientName);

}
