package com.store.sandwich.controllers;

import com.store.sandwich.requests.SandwichRequest;
import com.store.sandwich.services.SandwichService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sandwiches")
public class SandwichController {

    @Autowired
    private SandwichService sandwichService;

    @PostMapping
    public ResponseEntity orderSandwich(@RequestBody SandwichRequest sandwichRequest) {

        // sum all ingredients price
        // create table sandwich with ingredients json
        // sum all ingredients price
        sandwichService.orderSandwich(sandwichRequest);

        return ResponseEntity.ok().build();
    }
}
