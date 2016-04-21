package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import java.time.LocalDate;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Jugador.
 */
@Entity
@Table(name = "jugador")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Jugador implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "nombre_jugador", nullable = false)
    private String nombreJugador;
    
    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;
    
    @Column(name = "num_canastas")
    private Integer numCanastas;
    
    @Column(name = "num_asistencias")
    private Integer numAsistencias;
    
    @Column(name = "num_rebotes")
    private Integer numRebotes;
    
    @Column(name = "posicion")
    private String posicion;
    
    @ManyToOne
    @JoinColumn(name = "juegan_id")
    private Equipo juegan;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreJugador() {
        return nombreJugador;
    }
    
    public void setNombreJugador(String nombreJugador) {
        this.nombreJugador = nombreJugador;
    }

    public LocalDate getFechaNacimiento() {
        return fechaNacimiento;
    }
    
    public void setFechaNacimiento(LocalDate fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public Integer getNumCanastas() {
        return numCanastas;
    }
    
    public void setNumCanastas(Integer numCanastas) {
        this.numCanastas = numCanastas;
    }

    public Integer getNumAsistencias() {
        return numAsistencias;
    }
    
    public void setNumAsistencias(Integer numAsistencias) {
        this.numAsistencias = numAsistencias;
    }

    public Integer getNumRebotes() {
        return numRebotes;
    }
    
    public void setNumRebotes(Integer numRebotes) {
        this.numRebotes = numRebotes;
    }

    public String getPosicion() {
        return posicion;
    }
    
    public void setPosicion(String posicion) {
        this.posicion = posicion;
    }

    public Equipo getJuegan() {
        return juegan;
    }

    public void setJuegan(Equipo equipo) {
        this.juegan = equipo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Jugador jugador = (Jugador) o;
        if(jugador.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, jugador.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Jugador{" +
            "id=" + id +
            ", nombreJugador='" + nombreJugador + "'" +
            ", fechaNacimiento='" + fechaNacimiento + "'" +
            ", numCanastas='" + numCanastas + "'" +
            ", numAsistencias='" + numAsistencias + "'" +
            ", numRebotes='" + numRebotes + "'" +
            ", posicion='" + posicion + "'" +
            '}';
    }
}
