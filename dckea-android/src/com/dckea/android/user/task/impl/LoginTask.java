package com.dckea.android.user.task.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.GsonHttpMessageConverter;
import org.springframework.http.converter.json.MappingJacksonHttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import android.os.AsyncTask;

import com.dckea.android.util.ResourceUriBuilder;
import com.dckea.common.domain.dto.AuthTokenEntity;
import com.dckea.common.domain.dto.ProfileEntity;
import com.dckea.common.domain.rest.RestResult;
import com.dckea.common.domain.rest.RestResultHandler;
import com.dckea.common.util.JSONUtil;
import com.google.inject.Inject;
import com.google.inject.name.Named;

/**
 * task to login a user.
 */
public class LoginTask extends AsyncTask<String, Integer, RestResult<AuthTokenEntity>>{
	
	
	private final RestTemplate restTemplate;
	private final ResourceUriBuilder resourceUriBuilder;
	private final String authenticationResourceUri;
	private final RestResultHandler restResultHandler;
	private final JSONUtil jsonUtil;
	
	@SuppressWarnings("unchecked")
	@Inject
	public LoginTask(@Named("restTemplate") 
							final RestTemplate restTemplate,
							@Named("resourceUriBuilder") 
							final ResourceUriBuilder resourceUriBuilder,
							@Named("authenticationResource")
							final String authenticationResourceUri,
							@Named("restResultHandler")
							final RestResultHandler restResultHandler,
							@Named("jsonUtil")
							final JSONUtil jsonUtil) {
		super();
		this.restTemplate = restTemplate;
		ArrayList<HttpMessageConverter<?>> messageConverters = new ArrayList<HttpMessageConverter<?>>();
		messageConverters.addAll(Arrays.asList(new StringHttpMessageConverter(), new GsonHttpMessageConverter()));
		

		this.restTemplate.setMessageConverters(messageConverters);
		this.jsonUtil = jsonUtil;
		this.resourceUriBuilder = resourceUriBuilder;
		this.authenticationResourceUri = authenticationResourceUri;
		this.restResultHandler = restResultHandler;
	}

	@Override
	protected RestResult<AuthTokenEntity> doInBackground(String... params) {
		String url = resourceUriBuilder.setResourceUri(this.authenticationResourceUri).build();
		String userId = params[0];
		String password = params[1];
		
		ProfileEntity postUser = new ProfileEntity(userId, null, null, password);
		
		HttpHeaders requestHeaders = new HttpHeaders();
		requestHeaders.set("Content-Type", "application/json");
		String postUserJson = jsonUtil.serializeRepresentation(postUser);
		HttpEntity<String> requestEntity = new HttpEntity<String>(postUserJson, requestHeaders);
		
		ResponseEntity<String> responseEntity = this.restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);
		return restResultHandler.createRestResult(responseEntity.getBody(), AuthTokenEntity.class);
	}
	
	
}
