package com.group6.BackendToyRNotUs.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductJDBCRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public List<ProductEntity> findByAgeGender(String age, String gender) {
		try {
			String ageTmp = "%" + age + "%";
			String genderTmp = "%" + gender + "%";

			return jdbcTemplate.query("SELECT * FROM public.tb_product WHERE age like ? AND gender like ?;",
					new Object[] { ageTmp, genderTmp }, new BeanPropertyRowMapper<>(ProductEntity.class));

		} catch (Exception e) {
			System.out.println(e);
			return null;
		}
	}
}
