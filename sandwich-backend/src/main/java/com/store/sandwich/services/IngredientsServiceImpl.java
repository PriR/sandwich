package com.store.sandwich.services;

import com.store.sandwich.dtos.Ingredients;
import com.store.sandwich.exceptions.IngredientNotFoundException;
import com.store.sandwich.exceptions.OutOfStockException;
import com.store.sandwich.repository.IngredientsRepository;
import com.store.sandwich.requests.UpdateIngredientQuantityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public void updateStock(Integer id, UpdateIngredientQuantityRequest request) {
        Optional<Ingredients> ingredient = ingredientsRepository.findById(id);
        if (ingredient.isPresent()) {
            Integer requestQuantity = request.getQuantity();
            if (UpdateIngredientQuantityRequest.Action.ADD.name().equals(request.getAction().toString())) {
                Integer newQuantity = Math.addExact(ingredient.get().getQuantity(), requestQuantity);
                addOnStock(id, newQuantity);
            } else {
                Integer newQuantity = Math.subtractExact(ingredient.get().getQuantity(), requestQuantity);
                removeFromStock(id, newQuantity, ingredient.get());
            }
        } else {
            throw new IngredientNotFoundException(id);
        }
    }

    @Override
    public Integer verifyStock(Integer id) {
        return ingredientsRepository.findById(id).get().getQuantity();
    }

    private void addOnStock(Integer id, Integer newQuantity) {
        ingredientsRepository.updateQuantity(id, newQuantity);
    }

    private void removeFromStock(Integer id, Integer newQuantity, Ingredients ingredient) {
        if (newQuantity > 0) {
            ingredientsRepository.updateQuantity(id, newQuantity);
        } else {
            throw new OutOfStockException(ingredient.getName());
        }
    }

}
