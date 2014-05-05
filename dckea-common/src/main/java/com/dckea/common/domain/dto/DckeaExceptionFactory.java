package com.dckea.common.domain.dto;

/**
 * Factory wired into Guice to instantiate dckea exception.
 */
public interface DckeaExceptionFactory {
	DckeaException createInsiemeException(String exception);
}
