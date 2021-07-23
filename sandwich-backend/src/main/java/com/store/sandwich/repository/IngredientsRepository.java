package com.store.sandwich.repository;

import com.store.sandwich.dtos.Ingredients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface IngredientsRepository extends JpaRepository<Ingredients, Integer> {

    List<Ingredients> findAllByIngredientType(String ingredientType);

    @Modifying
    @Transactional
    @Query(value = "UPDATE Ingredients set quantity = :newQuantity WHERE id = :id", nativeQuery = true)
    void updateQuantity(Integer id, Integer newQuantity);

}
