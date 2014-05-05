package com.dckea.common.domain.dto;

import com.dckea.common.util.JSONUtil;
import com.google.inject.Inject;
import com.google.inject.assistedinject.Assisted;
import com.google.inject.name.Named;


/**
 * Dckea exception.
 */
public class DckeaException extends Exception {

	
	private static final long serialVersionUID = -3722788484561737019L;
	
	private final DckeaExceptionEntity exception;

	private final JSONUtil jsonUtil;
	
	/**
	 * Default constructor.
	 *
	 * @param jsonUtil the json util
	 * @param exception the exception
	 */
	@Inject
	public DckeaException (@Named("jsonUtil") final JSONUtil jsonUtil, 
			@Assisted final String exception) {
		this.jsonUtil = jsonUtil;
		this.exception = new DckeaExceptionEntity(exception);
	}
	
	/**
	 * Serialize the json exception.
	 *
	 * @return the string
	 */
	public String serializeJsonException() {
		return jsonUtil.serializeRepresentation(this.exception);
	}

}
