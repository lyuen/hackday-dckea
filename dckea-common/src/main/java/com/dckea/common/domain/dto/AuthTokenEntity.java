package com.dckea.common.domain.dto;

import com.google.gson.annotations.SerializedName;

/**
 * The Class AuthTokenEntity.
 */
public class AuthTokenEntity extends RestEntity {

	private static final String ACCESS_TOKEN = "access_token";
	private static final String EXPIRES_IN = "expires_in";
	private static final String TOKEN_TYPE = "token_type";
	
	@SerializedName(ACCESS_TOKEN)
	private String accessToken;
	
	@SerializedName(EXPIRES_IN)
	private int expiresIn;
	
	@SerializedName(TOKEN_TYPE)
	private String tokenType;

	public AuthTokenEntity(final String accessToken, final int expiresIn, final String tokenType) {
		this.accessToken = accessToken;
		this.expiresIn = expiresIn;
		this.tokenType = tokenType;
		
	}
	
	public String getAccessToken() {
		return accessToken;
	}

	public int getExpiresIn() {
		return expiresIn;
	}

	public String getTokenType() {
		return tokenType;
	}
	
}
