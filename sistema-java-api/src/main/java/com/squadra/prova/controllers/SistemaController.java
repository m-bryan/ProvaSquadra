package com.squadra.prova.controllers;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.squadra.prova.domain.Sistema;
import com.squadra.prova.dto.SistemaNewDTO;
import com.squadra.prova.services.MapValidationErrorService;
import com.squadra.prova.services.SistemaService;

@RestController
@RequestMapping("/api/sistemas")
@CrossOrigin
public class SistemaController {

	@Autowired
	private SistemaService service;
	
	@Autowired
	private MapValidationErrorService mapValidationErrorService;

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<?> salvar(@Valid @RequestBody SistemaNewDTO objDto, BindingResult result) {
		ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationErrorService(result);
		if(errorMap != null) return errorMap;
		
		Sistema obj = service.fromDto(objDto);
		obj = service.salvar(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Sistema>> listar() {
		List<Sistema> sistemas = service.listar();
		return ResponseEntity.ok().body(sistemas);
	}
	
	@RequestMapping(value = "/pesquisa", method = RequestMethod.GET)
	public ResponseEntity<?> pesquisar(@RequestParam(value = "descricao", defaultValue = "") String descricao, 
										@RequestParam(value = "sigla", defaultValue = "") String sigla, 
										@RequestParam(value = "email", defaultValue = "") String email) {
		
		List<Sistema> sistemas = service.listar(descricao, sigla, email);
		return ResponseEntity.ok().body(sistemas);
	}
}
