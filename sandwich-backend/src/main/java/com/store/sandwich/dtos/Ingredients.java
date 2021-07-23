package com.store.sandwich.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="ingredients")
@Setter
@Getter
@ToString
public class Ingredients {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private Double price;
    private Integer quantity;
    @Column(name="ingredient_type")
    private String ingredientType;
}
