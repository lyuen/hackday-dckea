package com.dckea.common.domain.dto;

import com.google.gson.annotations.SerializedName;

/**
 * Serialize/deserialize a add to cart form representation.
 */
public class AddToCartEntity extends RestEntity {

private static final String QUANTITY = "quantity";
	
	@SerializedName(QUANTITY)
	private int quantity;

	public AddToCartEntity(final int quantity) {
		this.quantity = quantity;
	}
	
	public int getQuantity() {
		return this.quantity;
	}
	
}
