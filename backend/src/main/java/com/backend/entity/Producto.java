package com.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter @Setter
@Entity
@Table

public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secuenciaDeProducto")
    @SequenceGenerator(name = "secuenciaDeProducto", sequenceName = "PRODUCTO_SEQUENCE", allocationSize = 1)

    private Long id;
    private String titulo;
    private String nombre;
    private String descripcion;

    private String direccion;

    private String politica_de_uso;

    private String politica_de_salud_y_seguridad;

    private String politica_de_cancelacion;

    @ManyToMany(targetEntity = Caracteristica.class, cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(
            name = "caracteristica_Producto",
            joinColumns = @JoinColumn(name = "caracteristica_id")
    )
    private List<Caracteristica> caracteristicas;

    @NotBlank
    @ManyToOne
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;


    @ManyToOne
    @JoinColumn(name = "ciudad_id", nullable = false)
    private Ciudad ciudad;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="producto_id")
    private List<Imagen> imagenes;

    @ManyToMany
    @JoinTable(
            joinColumns = @JoinColumn(name = "producto_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id", nullable = false)
    )
    @JsonIgnore
    private List<Caracteristica> caracteristica;

    public Producto() {
    }

    public Producto(Long id, String titulo, String nombre, String descripcion, String direccion, String politica_de_uso, String politica_de_salud_y_seguridad, String politica_de_cancelacion) {
        this.id = id;
        this.titulo = titulo;
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.descripcion = descripcion;
        this.direccion = direccion;
        this.politica_de_uso = politica_de_uso;
        this.politica_de_salud_y_seguridad = politica_de_salud_y_seguridad;
        this.politica_de_cancelacion = politica_de_cancelacion;
    }
}