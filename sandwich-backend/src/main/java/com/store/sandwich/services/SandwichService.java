package com.store.sandwich.services;

import com.store.sandwich.requests.SandwichRequest;
import org.springframework.boot.autoconfigure.kafka.KafkaProperties;

import java.util.Map;

public interface SandwichService {

    void orderSandwich(SandwichRequest sandwichRequest);

//    public abstract Double addPriceProductComposition(RequestSandwich requestSandwich, Double currentPrice);
//
//    public abstract Double verifyStock(Sandwich sandwich);

//    Map<String, Double> mapPriceProductComposition(RequestSandwich requestSandwich);

}
