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

import android.os.AsyncTask;

import com.dckea.android.util.ResourceUriBuilder;
import com.dckea.common.domain.dto.AddToCartEntity;
import com.dckea.common.util.JSONUtil;
import com.google.inject.Inject;
import com.google.inject.name.Named;

public class AddToCartTask extends AsyncTask<String, Integer, Boolean>{

	
	private final RestTemplate restTemplate;
	private final ResourceUriBuilder resourceUriBuilder;
	private final JSONUtil jsonUtil;

	@Inject
	public AddToCartTask(@Named("restTemplate") 
							final RestTemplate restTemplate,
							@Named("resourceUriBuilder") 
							final ResourceUriBuilder resourceUriBuilder,
							@Named("jsonUtil")
							final JSONUtil jsonUtil) {
		super();
		this.restTemplate = restTemplate;
		ArrayList<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
		messageConverters.addAll(Arrays.asList(new StringHttpMessageConverter(), new GsonHttpMessageConverter()));
		this.restTemplate.setMessageConverters(messageConverters);
		
		this.resourceUriBuilder = resourceUriBuilder;
		this.jsonUtil = jsonUtil;
	}
	
	@Override
	protected Boolean doInBackground(String... params) {
		String oauthToken = params[0];
		String itemUri = params[1];

		String addToCartUri = "carts/ikea/default/lineitems" + itemUri;
		
//		String url = "http://localhost:9080/dcapi/carts/mobee/default/lineitems/items/mobee/" + itemId;
		
		String url = "http://10.10.131.227:8080/dcapi/" + addToCartUri;
		
		AddToCartEntity addToCartEntity = new AddToCartEntity(1);
		
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.set("Content-Type", "application/json");
		requestHeaders.set("Authorization", "Bearer " + oauthToken);
		String addToCartForm = jsonUtil.serializeRepresentation(addToCartEntity);
		HttpEntity<String> requestEntity = new HttpEntity<String>(addToCartForm, requestHeaders);
		
		URI location = restTemplate.postForLocation(url, requestEntity);
		
//		byte[] responseByte = new byte[] {73, 110, 118, 97, 108, 105, 100, 32, 85, 82, 73, 58, 32, 47, 105, 116, 101, 109, 115, 47, 109, 111, 98, 101, 101, 47, 103, 106, 115, 119, 109, 110, 98, 121, 109, 121, 51, 116, 105, 122, 106, 118, 103, 105, 51, 116, 113, 111, 98, 122, 109, 106, 113, 116, 97, 109, 106, 116, 104, 98, 114, 100, 109, 111, 108, 99, 104, 102, 114, 119, 101, 122, 116, 101, 109, 113, 52, 116, 115, 111, 100, 103, 104, 102, 116, 103, 101, 122, 98, 119, 47, 105, 107, 101, 97};
//		String response = new String(responseByte);
		
//		ResponseEntity<String> responseEntity = this.restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

		return true;
	}

}
