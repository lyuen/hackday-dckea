package com.dckea.common.domain.dto;

import com.google.gson.annotations.SerializedName;

/**
 * Serialize/deserialize a profile representation.
 */
public class ProfileEntity extends RestEntity {

	/** given name. */
	private static final String GIVEN_NAME = "given-name";

	/** family name. */
	private static final String FAMILY_NAME = "family-name";

	/** username. */
	private static final String USERNAME = "username";

	/** password. */
	private static final String PASSWORD = "password";

	@SerializedName(USERNAME)
	private final String userName;
	
	@SerializedName(FAMILY_NAME)
	private final String familyName;
	
	@SerializedName(GIVEN_NAME)
	private final String givenName;
	
	@SerializedName(PASSWORD)
	private final String password;
	
	public ProfileEntity(final String userName, final String familyName, 
			final String givenName, final String password) {
				this.userName = userName;
				this.familyName = familyName;
				this.givenName = givenName;
				this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public String getFamilyName() {
		return familyName;
	}

	public String getGivenName() {
		return givenName;
	}

	public String getPassword() {
		return password;
	}
	
}
