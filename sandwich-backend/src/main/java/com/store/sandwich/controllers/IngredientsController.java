package com.store.sandwich.controllers;

import com.store.sandwich.dtos.*;
import com.store.sandwich.exceptions.IngredientNotFoundException;
import com.store.sandwich.exceptions.OutOfStockException;
import com.store.sandwich.requests.UpdateIngredientQuantityRequest;
import com.store.sandwich.services.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ingredients")
public class IngredientsController {

    @Autowired
    private IngredientsService ingredientsService;

    // return all ingredients or ingredient per type
    @GetMapping
    public List<Ingredients> getIngredient(@RequestParam(required = false, name = "types") Optional<String> ingredientType) {
        if (ingredientType.isPresent()) {
            return ingredientsService.getIngredientsByIngredientType(ingredientType.get());
        }
        return ingredientsService.getIngredients();
    }

    // update ingredient stock by subtracting current stock by the quantity sent on request
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity updateStock(@PathVariable Integer id, @RequestBody UpdateIngredientQuantityRequest request) throws OutOfStockException, IngredientNotFoundException {
        ingredientsService.updateStock(id, request);
        return ResponseEntity.ok().build();
    }

    // return stock per requested ingredient id
    @GetMapping("/stock/{id}")
    public Integer verifyStock(@PathVariable("id") Integer id) {
        return ingredientsService.verifyStock(id);
    }

}
