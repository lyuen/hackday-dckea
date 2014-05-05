package com.dckea.common.domain.dto;

import com.google.gson.annotations.SerializedName;

public class DisplayAttributesEntity extends RestEntity {

	private static final String DISPLAY_NAME = "display-name";
	private static final String DISPLAY_VALUE = "display-value";
	private static final String NAME = "name";
	private static final String VALUE = "value";
	
	@SerializedName(DISPLAY_NAME)
	private final String displayName;
	
	@SerializedName(DISPLAY_VALUE)
	private final String displayValue;
	
	@SerializedName(NAME)
	private final String name;
	
	@SerializedName(VALUE)
	private final String value;
	
	public DisplayAttributesEntity (final String displayName, final String displayValue, 
			final String name, final String value) {
				this.displayName = displayName;
				this.displayValue = displayValue;
				this.name = name;
				this.value = value;
		
	}

	public String getDisplayName() {
		return displayName;
	}

	public String getDisplayValue() {
		return displayValue;
	}

	public String getName() {
		return name;
	}

	public String getValue() {
		return value;
	}
}
