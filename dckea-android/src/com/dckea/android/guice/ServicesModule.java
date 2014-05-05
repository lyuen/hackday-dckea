package com.dckea.android.guice;

import org.springframework.web.client.RestTemplate;

import com.dckea.android.item.task.impl.GetItemTask;
import com.dckea.android.user.task.impl.LoginTask;
import com.google.inject.AbstractModule;
import com.google.inject.name.Names;

/**
 * Guice module for service bindings.
 */
public class ServicesModule extends AbstractModule {

	@Override
	protected void configure() {
		//Spring rest client bindings.
		bind(RestTemplate.class).annotatedWith(Names.named("restTemplate")).to(RestTemplate.class);
		
		//service bindings
		//TODO: these bindings are unnecessary because the Guice provider can find the classes without
		//      annotations. Look into deleting these at some point.
		bind(LoginTask.class).annotatedWith(Names.named("loginTask")).to(LoginTask.class);
		
		bind(GetItemTask.class).annotatedWith(Names.named("getItemTask")).to(GetItemTask.class);
		
	}

}
