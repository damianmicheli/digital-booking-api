import React from 'react';

import HeaderProduct from './content/HeaderProduct';
import LocationProduct from './content/LocationProduct';
import DescriptionProduct from './content/DescriptionProduct';
import Features from './content/Features';
import Politics from './content/Politics';

import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router";
import GalleryContainer from '../gallery/GalleryContainer';

const Product = ({images}) => {

  const { id } = useParams();

  const [dataProducto] = useFetch(
    `http://localhost:8080/productos/${id}`
  );

  const nombre = dataProducto && dataProducto.nombre;
  const titulo = dataProducto && dataProducto.titulo;
  const descripcion = dataProducto && dataProducto.descripcion;
  const direccion = dataProducto && dataProducto.direccion;
  const politicaDeCancelacion = dataProducto && dataProducto.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = dataProducto && dataProducto.politica_de_salud_y_seguridad;
  const normasDeUso = dataProducto && dataProducto.politica_de_uso;

  // const categoria = dataProducto && dataProducto.categoria.titulo.toUpperCase();

  return (
    <div className='container'>
        <HeaderProduct 
        // category={categoria}
        title={nombre}/>
        <LocationProduct location={direccion}/>
        <GalleryContainer images={images}/>
        <DescriptionProduct title={titulo} description={descripcion} />
        <Features 
        // pasar features como props
        />
        <Politics normas={normasDeUso} politicaSalud={politicaDeSaludYSeguridad} politicaCancelacion={politicaDeCancelacion}/>
    </div>
  )
}

export default Product;