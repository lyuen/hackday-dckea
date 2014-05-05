package com.dckea.android.item.task.impl;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import android.os.AsyncTask;

import com.dckea.android.util.ResourceUriBuilder;
import com.dckea.common.domain.dto.ItemDetailsEntity;
import com.dckea.common.domain.rest.RestResultHandler;
import com.dckea.common.util.JSONUtil;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.inject.Inject;
import com.google.inject.name.Named;

/**
 * task to login a user.
 */
public class GetItemTask extends AsyncTask<String, Integer, ItemDetailsEntity>{
	
	
	private final RestTemplate restTemplate;
	private final ResourceUriBuilder resourceUriBuilder;
	private final RestResultHandler restResultHandler;
	
	@SuppressWarnings("unchecked")
	@Inject
	public GetItemTask(@Named("restTemplate") 
							final RestTemplate restTemplate,
							@Named("resourceUriBuilder") 
							final ResourceUriBuilder resourceUriBuilder,
							@Named("restResultHandler")
							final RestResultHandler restResultHandler,
							@Named("jsonUtil")
							final JSONUtil jsonUtil) {
		super();
		this.restTemplate = restTemplate;
		ArrayList<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
		messageConverters.addAll(Arrays.asList(new StringHttpMessageConverter(), new GsonHttpMessageConverter()));
		

		this.restTemplate.setMessageConverters(messageConverters);
		this.resourceUriBuilder = resourceUriBuilder;
		this.restResultHandler = restResultHandler;
	}

	@Override
	protected ItemDetailsEntity doInBackground(String... params) {
		String url = resourceUriBuilder.setResourceUri(params[0])
										.setZoomUri(params[1])
										.buildFromPartialUri();
		
		String jsonResult = this.restTemplate.getForObject(url, String.class);
		//Parse Json here
		JsonElement parse = new JsonParser().parse(jsonResult);
		JsonObject definitionObject = parse.getAsJsonObject().get(":definition").getAsJsonArray().get(0).getAsJsonObject();
		
		JsonElement displayNameElement = definitionObject.get("display-name");
		JsonElement descriptionElement = definitionObject.get("details").getAsJsonArray().get(0).getAsJsonObject().get("display-value");
		JsonElement priceElement = parse.getAsJsonObject().get(":price").getAsJsonArray().get(0).getAsJsonObject().get("purchase-price").getAsJsonArray().get(0).getAsJsonObject().get("display");
		JsonElement assetElement = definitionObject.get(":assets").getAsJsonArray().get(0).getAsJsonObject().get(":element").getAsJsonArray().get(0).getAsJsonObject().get("content-location");
		
		String displayName = displayNameElement.getAsString();
		String description  = descriptionElement.getAsString();
		String priceDisplay = priceElement.getAsString();
		String assetLocation = assetElement.getAsString();
		
		ItemDetailsEntity itemDetailsEntity = new ItemDetailsEntity(description, displayName, priceDisplay, assetLocation);
		
		return itemDetailsEntity;
	}
	
	
}
