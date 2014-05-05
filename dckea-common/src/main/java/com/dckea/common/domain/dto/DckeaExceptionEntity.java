package com.dckea.common.domain.dto;

import com.google.gson.annotations.SerializedName;


/**
 * Dckea exception dto to pass json exceptions to the client.
 */
public class DckeaExceptionEntity extends RestEntity {
	
	@SerializedName("dckea-error")
	private final String exception;
	
	/**
	 * Default constructor.
	 *
	 * @param exception the exception
	 */
	public DckeaExceptionEntity(final String exception) {
		this.exception = exception;
	}
	
	/**
	 * Gets the exception.
	 *
	 * @return the exception
	 */
	public String getException() {
		return this.exception;
	}
}
