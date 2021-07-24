package com.store.sandwich.requests;

import lombok.Getter;

@Getter
public class UpdateIngredientQuantityRequest {

    Integer quantity;
    Action action; // add or remove from stock

    public enum Action {
        REMOVE,
        ADD
    }

}
