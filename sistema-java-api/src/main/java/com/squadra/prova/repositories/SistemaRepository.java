package com.squadra.prova.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.squadra.prova.domain.Sistema;

@Repository
public interface SistemaRepository extends JpaRepository<Sistema, Long> {

	@Transactional(readOnly = true)
	@Query("SELECT s FROM Sistema s "
			+ "WHERE UPPER(s.descricao) LIKE %:descricao% "
			+ "AND UPPER(s.sigla) LIKE %:sigla% "
			+ "AND UPPER(s.email) LIKE %:email% ")
	List<Sistema> listar(@Param("descricao") String descricao, @Param("sigla") String sigla, @Param("email") String email);
}
