package com.mycompany.myapp.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Socio.
 */
@Entity
@Table(name = "socio")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Socio implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nombre_socio")
    private String nombreSocio;
    
    @Column(name = "direccion")
    private String direccion;
    
    @ManyToOne
    @JoinColumn(name = "asociado_id")
    private Equipo asociado;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombreSocio() {
        return nombreSocio;
    }
    
    public void setNombreSocio(String nombreSocio) {
        this.nombreSocio = nombreSocio;
    }

    public String getDireccion() {
        return direccion;
    }
    
    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Equipo getAsociado() {
        return asociado;
    }

    public void setAsociado(Equipo equipo) {
        this.asociado = equipo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Socio socio = (Socio) o;
        if(socio.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, socio.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Socio{" +
            "id=" + id +
            ", nombreSocio='" + nombreSocio + "'" +
            ", direccion='" + direccion + "'" +
            '}';
    }
}
