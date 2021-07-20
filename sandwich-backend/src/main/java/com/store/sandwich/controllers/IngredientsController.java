package com.store.sandwich.controllers;

import com.store.sandwich.dtos.*;
import com.store.sandwich.services.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/ingredients")
public class IngredientsController {

    @Autowired
    private IngredientsService ingredientsService;

    @GetMapping("/{ingredientName}")
    public List<Ingredient> getIngredient(@PathVariable("ingredientName") String ingredientName) {
        return ingredientsService.getIngredient(ingredientName);
    }

}
