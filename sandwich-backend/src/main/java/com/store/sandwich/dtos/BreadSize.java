package com.store.sandwich.dtos;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name="Bread_size")
@Setter
@Getter
@ToString
public class BreadSize extends Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private Double price;
    private Integer quantity;
}
