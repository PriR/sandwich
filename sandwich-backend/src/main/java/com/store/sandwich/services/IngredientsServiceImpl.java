package com.store.sandwich.services;

import com.store.sandwich.converters.ConverterIngredient;
import com.store.sandwich.dtos.*;
import com.store.sandwich.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IngredientsServiceImpl implements IngredientsService {

    // todo: colocar em strategy ao inves de switch case

    @Autowired
    private BreadSizeRepository breadSizeRepository;

    @Autowired
    private BreadTypeRepository breadTypeRepository;

    @Autowired
    private SaucesRepository saucesRepository;

    @Autowired
    private VegetablesRepository vegetablesRepository;

    @Autowired
    private ToppingsRepository toppingsRepository;

    @Autowired
    private ConverterIngredient converterIngredient;

    @Override
    public List<Ingredient> getIngredient(String ingredientName) {
        List<Ingredient> ingredients = new ArrayList<>();
        switch (ingredientName) {
            case "toppings": {
                ingredients = converterIngredient.toIngredient(toppingsRepository.findAll());
                break;
            }
            case "breadSize": {
                ingredients = converterIngredient.toIngredient(breadSizeRepository.findAll());
                break;
            }
            case "breadType": {
                ingredients = converterIngredient.toIngredient(breadTypeRepository.findAll());
                break;
            }
            case "vegetables": {
                ingredients = converterIngredient.toIngredient(vegetablesRepository.findAll());
                break;
            }
            case "sauces": {
                ingredients = converterIngredient.toIngredient(saucesRepository.findAll());
                break;
            }
        }
        return ingredients;
    }


    //    @Override
//    public Double verifyToppingsStock(Sandwich sandwich) {
//        return null;
//    }
}
