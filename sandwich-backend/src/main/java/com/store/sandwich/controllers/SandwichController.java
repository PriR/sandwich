package com.store.sandwich.controllers;

import com.store.sandwich.dtos.Sandwich;
import com.store.sandwich.requests.RequestSandwich;
import com.store.sandwich.services.SandwichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sandwiches")
public class SandwichController {

    @Autowired
    private SandwichService sandwichService;

    @PostMapping("/sell")
    public Double sell(@RequestBody RequestSandwich requestSandwich) {
        // verify

        // calculate price
        return sandwichService.calculatePrice(requestSandwich);

    }

    // get available ingredients to show to customer
//    @GetMapping("/ingredients")
//    public AvailableIngredients availableIngredients() {
//
//    }

//    public Double verifyStock(Sandwich product) {
//        return sandwichService.verifyStock(product);
//    }
}
