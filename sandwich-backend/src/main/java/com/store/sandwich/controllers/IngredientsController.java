package com.store.sandwich.controllers;

import com.store.sandwich.dtos.*;
import com.store.sandwich.requests.SandwichRequest;
import com.store.sandwich.requests.UpdateIngredientQuantityRequest;
import com.store.sandwich.services.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ingredients")
public class IngredientsController {

    @Autowired
    private IngredientsService ingredientsService;

    // return all ingredient properties
    @GetMapping
    public List<Ingredients> getIngredient(@RequestParam("types") String ingredientType) {
        return ingredientsService.getIngredientByIngredientType(ingredientType);
    }

    // update ingredient stock by the quantity sent on request
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity updateStock(@PathVariable Integer id, @RequestBody UpdateIngredientQuantityRequest request) {
        ingredientsService.updateStock(id, request);
        return ResponseEntity.ok().build();
    }

    // return stock per requested ingredient id
    @GetMapping("{id}")
    public Integer verifyStock(@PathVariable("id") Integer id) {
        return ingredientsService.verifyStock(id);
    }

}
