package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Jugador;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Jugador entity.
 */
public interface JugadorRepository extends JpaRepository<Jugador,Long> {

    @Query("select jugador from Jugador jugador where jugador.numCanastas >=:canastas")
    Page<Jugador> topPlayers(@Param("canastas") Integer canastas, Pageable pageable);

    @Query("select jugador from Jugador jugador where jugador.numAsistencias >=:asistencias")
    Page<Jugador> topAsistencias(@Param("asistencias") Integer asistencias, Pageable pageable);

}
