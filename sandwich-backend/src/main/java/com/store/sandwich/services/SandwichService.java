package com.store.sandwich.services;

import com.store.sandwich.dtos.*;
import com.store.sandwich.requests.RequestSandwich;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SandwichService {

    public Double calculatePrice(RequestSandwich requestSandwich) {
        Sandwich sandwich = new SandwichImpl();
//        Double bread = new Bread(sandwich).mapPriceProductComposition(requestSandwich);
//        Double sauces = new Sauces(sandwich).mapPriceProductComposition(requestSandwich);
//        Double vegetables = new Vegetables(sandwich).mapPriceProductComposition(requestSandwich);
//        Double toppingPricePer100 = new ToppingPricePer100(sandwich).mapPriceProductComposition(requestSandwich);

//        return sandwich.mapPriceProductComposition(requestSandwich);

        return 1.0;
    }

    public Double initialStock(Sandwich product) {
        return Double.MIN_NORMAL;
    }


//    @Override
//    public Double addPriceProductComposition(RequestSandwich requestSandwich, Double currentPrice) {
//        return null;
//    }
//
//    @Override
//    public Double verifyStock(Sandwich sandwich) {
//        return null;
//    }
}
