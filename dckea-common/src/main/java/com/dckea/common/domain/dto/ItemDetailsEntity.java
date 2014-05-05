package com.dckea.common.domain.dto;


public class ItemDetailsEntity extends RestEntity {

	private final String description;
	private final String displayName;
	private final String price;

	public ItemDetailsEntity(final String description, 
			final String displayName, final String price) {
		this.description = description;
		this.displayName = displayName;
		this.price = price;
	}
	
	public String getDescription() {
		return description;
	}

	public String getDisplayName() {
		return displayName;
	}

	public String getPrice() {
		return price;
	}
}
