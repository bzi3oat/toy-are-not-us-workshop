package com.group6.BackendToyRNotUs.product;

import com.group6.BackendToyRNotUs.exception.ConflictException;
import com.group6.BackendToyRNotUs.exception.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductJDBCRepository productJDBCRepository;

    public ProductEntity add(ProductEntity entity) throws ConflictException {
        return productRepository.save(entity);
    }

    public List<ProductEntity> addAll(List<ProductEntity> data) throws ConflictException {
        return productRepository.saveAll(data);
    }

    public List<ProductEntity> findAll() {
        return productRepository.findAll();
    }

    public Page<ProductEntity> findAllByPage(String age, String gender, Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    public List<ProductEntity> findAllByAgeGender(String age, String gender) {
        if (age == null)
            age = "";
        if (gender == null)
            gender = "";
//        return productJDBCRepository.findByAgeGender(age, gender);
        return productRepository.findByAgeAndGender(age, gender);
    }

    public ProductEntity findOneById(Long id) throws ProductNotFoundException {
        return productRepository.findById(id).orElseThrow(() ->
                new ProductNotFoundException("Product not found.")
        );
    }

    public void deleteById(Long id) {
        productRepository.deleteById(id);
    }

    public void deleteByObject(ProductEntity entity) {
        productRepository.delete(entity);
    }
}
