package com.squadra.prova.config;

import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
          .select()
          .apis(RequestHandlerSelectors.basePackage("com.squadra.prova.controllers"))
          .paths(PathSelectors.any())
          .build()
          .apiInfo(apiInfo());
    }
    
    private ApiInfo apiInfo() {
    	return new ApiInfo(
    	"API - Sistemas",
    	"Documentação de API para a prova da Squadra",
    	"Versão 1.0",
    	"http://somewhere.com/api/",
    	new Contact("Squadra", "somewhere.com", "someone@email.com"),
    	"Permitido uso para terceiros com autorização prévia",
    	"somewhere.com/termos",
    	Collections.emptyList() // Vendor Extensions
    	);
    	}

}
