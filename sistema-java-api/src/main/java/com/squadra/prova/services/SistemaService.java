package com.squadra.prova.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squadra.prova.domain.Sistema;
import com.squadra.prova.domain.enums.EnumStatusSistema;
import com.squadra.prova.dto.SistemaNewDTO;
import com.squadra.prova.repositories.SistemaRepository;

@Service
public class SistemaService {

	@Autowired
	private SistemaRepository repo;

	public Sistema salvar(Sistema obj) {
		obj.setStatus(EnumStatusSistema.ATIVO);
		return repo.save(obj);
	}

	public Sistema alterar(Sistema obj) {
		return repo.save(obj);
	}

	public void excluir(Long id) {
		repo.deleteById(id);
	}
	
	public List<Sistema> listar() {
		return repo.findAll();
	}

	public List<Sistema> listar(String descricao, String sigla, String email) {
		return repo.listar(descricao.toUpperCase(), sigla.toUpperCase(), email.toUpperCase());
	}

	public Sistema fromDto(SistemaNewDTO objDto) {
		Sistema obj = new Sistema(null, 
								objDto.getDescricao(), 
								objDto.getSigla(), 
								objDto.getUrl(), 
								objDto.getEmail(),
								null);
		return obj;
	}
}
