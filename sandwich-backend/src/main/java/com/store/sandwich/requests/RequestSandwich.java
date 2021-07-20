package com.store.sandwich.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.store.sandwich.dtos.*;
import lombok.Data;
import lombok.NonNull;

import java.util.List;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
public class RequestSandwich {
//    @NonNull
//    private BreadType.BreadTypeStandardPriceEnum breadTypeStandardPrice;
//    @NonNull
//    private BreadSize.BreadSizeStandardPriceEnum breadSizeStandardPrice;

//    private List<Toppings.ToppingPricePer100Enum> toppings;
//    private List<Sauces.SaucesEnum> sauces;
//    private List<Vegetables.VegetablesEnum> vegetables;
}
