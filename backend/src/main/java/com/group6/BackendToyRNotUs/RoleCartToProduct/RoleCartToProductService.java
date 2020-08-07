package com.group6.BackendToyRNotUs.RoleCartToProduct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.group6.BackendToyRNotUs.product.ProductModel;

@Service
public class RoleCartToProductService {

	@Autowired
	private RoleCartToProductRepository cartToProductRepository;

	@Transactional(rollbackFor = Exception.class)
	public RoleCartToProductEntity add(ProductModel entity, Long cartId) {
		RoleCartToProductEntity data = new RoleCartToProductEntity();
		data.setCart_id(cartId);
		data.setProduct_id(entity.getId());
		data.setAmount(entity.getAmount());
		return cartToProductRepository.save(data);
	}
}
