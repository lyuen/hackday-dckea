package com.dckea.common.guice;

import com.dckea.common.domain.dto.DckeaException;
import com.dckea.common.domain.dto.DckeaExceptionFactory;
import com.dckea.common.domain.rest.RestResultHandler;
import com.dckea.common.util.JSONUtil;
import com.google.inject.AbstractModule;
import com.google.inject.assistedinject.FactoryModuleBuilder;
import com.google.inject.name.Names;


public class DckeaCommonModule extends AbstractModule {

	@Override
	protected void configure() {
		bind(JSONUtil.class).annotatedWith(Names.named("jsonUtil")).to(JSONUtil.class);
		bind(RestResultHandler.class).annotatedWith(Names.named("restResultHandler")).to(RestResultHandler.class);
		install(new FactoryModuleBuilder()
		 .implement(DckeaException.class, DckeaException.class)
	     .build(DckeaExceptionFactory.class));
	}

}
