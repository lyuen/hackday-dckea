package com.dckea.android.guice;

import com.dckea.android.util.ResourceUriBuilder;
import com.google.inject.AbstractModule;
import com.google.inject.name.Names;

/**
 * Guice module for ResourceUri bindings.
 * 
 * Rather than hard coding all of the resource URI strings in every class.
 * I chose to inject them so if the resource URI were to change, they would only have to be changed here.
 * 
 * This Module holds the Guice bindings for all core resources being used. For the implementation
 * of the services these URIs are binding too, refer to the core project.
 * 
 */
public class ResourceUriModule extends AbstractModule {

	@Override
	protected void configure() {
		//System specific bindings. 
		//TODO: should put these in properties files.
		bind(String.class).annotatedWith(Names.named("host")).toInstance("10.10.131.227");
		bind(Integer.class).annotatedWith(Names.named("hostPort")).toInstance(8080);
		bind(String.class).annotatedWith(Names.named("storeCode")).toInstance("ikea");
		
		//Resource bindings.
		bind(String.class).annotatedWith(Names.named("authenticationResource")).toInstance("authentication");
		
		
		//Util Bindings
		bind(ResourceUriBuilder.class).annotatedWith(Names.named("resourceUriBuilder")).to(ResourceUriBuilder.class);
		
		
	}

}
