package com.store.sandwich.services;

import com.store.sandwich.dtos.Sandwiches;
import com.store.sandwich.repository.SandwichesRepository;
import com.store.sandwich.requests.SandwichRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SandwichServiceImpl implements SandwichService {

    @Autowired
    private SandwichesRepository repository;

    @Override
    public void orderSandwich(SandwichRequest request) {
        Sandwiches sandwich = new Sandwiches();
        sandwich.setBreadType(request.getBreadType());
        sandwich.setBreadSize(request.getBreadSize());

        sandwich.setToppings(request.getToppings().toString());
        sandwich.setSauces(request.getSauces().toString());
        sandwich.setVegetables(request.getVegetables().toString());

        repository.save(sandwich);
    }
}
