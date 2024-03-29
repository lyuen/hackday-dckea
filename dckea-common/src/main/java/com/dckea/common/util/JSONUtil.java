package com.dckea.common.util;

import com.dckea.common.domain.dto.RestEntity;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;



/**
 * Wraps the {@link GsonBuilder} which takes care of serializing/deserializing JSON representations.
 * I've wrapped it so that it is encapsulated and used strictly for DTOs that extend {@link RestEntity}s.
 */
public class JSONUtil {
	private final Gson gson;
	
	/**
	 * Default constructor.
	 */
	public JSONUtil() {
		gson = new GsonBuilder().create();
	}
	
	/**
	 * Deserialize string json representation into a {@link RestEntity}.
	 *
	 * @param <E> the element type
	 * @param jsonRepresentation the json representation
	 * @param cls the cls
	 * @return the e
	 */
	public <E extends RestEntity> E deserializeRepresentation(String jsonRepresentation, Class<E> cls) {
		return gson.fromJson(jsonRepresentation, cls);
	}
	
	/**
	 * Serialize {@link RestEntity} into a string json representation.
	 *
	 * @param <E> the element type
	 * @param persistentDto the persistent dto
	 * @return the string
	 */
	public <E extends RestEntity> String serializeRepresentation(E persistentDto) {
		return gson.toJson(persistentDto);
	}
}
