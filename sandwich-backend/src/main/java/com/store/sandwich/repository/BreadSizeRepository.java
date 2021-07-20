package com.store.sandwich.repository;

import com.store.sandwich.dtos.BreadSize;
import com.store.sandwich.dtos.Vegetables;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BreadSizeRepository extends JpaRepository<BreadSize, Integer> {
}
