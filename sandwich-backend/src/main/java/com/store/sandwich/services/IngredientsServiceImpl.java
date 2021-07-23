package com.store.sandwich.services;

import com.store.sandwich.dtos.Ingredients;
import com.store.sandwich.exceptions.IngredientNotFoundException;
import com.store.sandwich.exceptions.OutOfStockException;
import com.store.sandwich.repository.IngredientsRepository;
import com.store.sandwich.requests.UpdateIngredientQuantityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.List;
import java.util.Optional;

@Service
public class IngredientsServiceImpl implements IngredientsService {

    @Autowired
    private IngredientsRepository ingredientsRepository;

    @Override
    public List<Ingredients> getIngredientsByIngredientType(String type) {
        return ingredientsRepository.findAllByIngredientType(type);
    }

    @Override
    public List<Ingredients> getIngredients() {
        return ingredientsRepository.findAll();
    }

    @Override
    public void removeStock(Integer id, UpdateIngredientQuantityRequest request) {
        // verify current stock
        // verify if stock will be > 0
        // if yes, ok, let update stock
        // if no, give message out of stock
        Optional<Ingredients> ingredient = ingredientsRepository.findById(id);
        if (ingredient.isPresent()) {
            Integer quantityToRemoveFromStock = request.getQuantity();
            Integer newQuantity = Math.subtractExact(ingredient.get().getQuantity(), quantityToRemoveFromStock);
            if (newQuantity > 0) {
                ingredientsRepository.updateQuantity(id, newQuantity);
            } else {
                throw new OutOfStockException(ingredient.get().getName());
            }
        } else {
            // throw exception ingredient doesn't exist
            throw new IngredientNotFoundException(id);
        }
    }

    @Override
    public Integer verifyStock(Integer id) {
        return ingredientsRepository.findById(id).get().getQuantity();
    }

}
