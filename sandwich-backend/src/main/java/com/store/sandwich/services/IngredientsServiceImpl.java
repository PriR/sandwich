package com.store.sandwich.services;

import com.store.sandwich.dtos.Ingredients;
import com.store.sandwich.repository.IngredientsRepository;
import com.store.sandwich.requests.UpdateIngredientQuantityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
        Integer newQuantity = request.getQuantity();
        ingredientsRepository.updateQuantity(id, newQuantity);
    }

    @Override
    public Integer verifyStock(Integer id) {
        return ingredientsRepository.findById(id).get().getQuantity();
    }

}
