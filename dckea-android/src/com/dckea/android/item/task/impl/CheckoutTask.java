package com.dckea.android.item.task.impl;

import java.net.URI;
import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import com.dckea.android.util.ResourceUriBuilder;
import com.dckea.common.domain.rest.RestResultHandler;
import com.dckea.common.util.JSONUtil;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.inject.Inject;
import com.google.inject.name.Named;

import android.os.AsyncTask;

public class CheckoutTask extends AsyncTask<String, Integer, Boolean> {

	private static final String DCAPI_URI = "http://10.10.131.227:8080/dcapi";
	private final RestTemplate restTemplate;
	
	@SuppressWarnings("unchecked")
	@Inject
	public CheckoutTask(@Named("restTemplate") 
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
		restTemplate.setMessageConverters(messageConverters);
	}

	@Override
	protected Boolean doInBackground(String... params) {

		String oauthToken = params[0];
		String checkoutUri = params[1];
		
		String url = DCAPI_URI + checkoutUri;
		
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.set("Content-Type", "application/json");
		requestHeaders.set("Authorization", "Bearer " + oauthToken);
		HttpEntity<String> requestEntity = new HttpEntity<String>("", requestHeaders);
		this.restTemplate.exchange(url, HttpMethod.GET, requestEntity, String.class);
		
		String purchaseFormUri = DCAPI_URI + "/carts/ikea/default?zoom=order:purchaseform";
		
		ResponseEntity<String> purchaseForm = this.restTemplate.exchange(purchaseFormUri, HttpMethod.GET, requestEntity, String.class);
		
		JsonElement parse = new JsonParser().parse(purchaseForm.getBody());
		String purchaseUri = parse.getAsJsonObject().get(":order").getAsJsonArray().get(0).getAsJsonObject().get(":purchaseform").getAsJsonArray().get(0).getAsJsonObject().get("links").getAsJsonArray().get(0).getAsJsonObject().get("href").getAsString();
		
		this.restTemplate.exchange(purchaseUri, HttpMethod.POST, requestEntity, String.class);
		
		return true;
	}
	
}
