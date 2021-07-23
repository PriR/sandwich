package com.store.sandwich.services;

import com.store.sandwich.dtos.*;
import com.store.sandwich.requests.UpdateIngredientQuantityRequest;

import java.util.List;

public interface IngredientsService {

    List<Ingredients> getIngredientByIngredientType(String ingredientName);

    void updateStock(Integer id, UpdateIngredientQuantityRequest request);

    Integer verifyStock(Integer id);

}
