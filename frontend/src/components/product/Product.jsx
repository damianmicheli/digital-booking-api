import React, { useEffect } from 'react';

import HeaderProduct from './content/HeaderProduct';
import LocationProduct from './content/LocationProduct';
import DescriptionProduct from './content/DescriptionProduct';
import Features from './content/Features';
import Politics from './content/Politics';
import BookingCalendar from '../booking_calendar/BookingCalendar';

import useFetch from '../../hooks/useFetch';
import { useParams } from "react-router";
import GalleryContainer from '../gallery/GalleryContainer';

import SocialMediaShare from './content/SocialMediaShare';
import Icon from '../global/Icon';
import { faHeart as faSolideHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';

import styles from './product.module.css';
import Button from '../global/Button';

import useFavorites from "../../hooks/useFavorites";

const Product = ({images}) => {

  const { id } = useParams();

  const idNumber = Number(id);

  const [data] = useFetch(
    `http://localhost:8080/productos/${id}`
  );

  const nombre = data && data.nombre;
  const titulo = data && data.titulo;
  const descripcion = data && data.descripcion;
  const direccion = data && data.direccion;
  const caracteristicas = data && data.caracteristicas;
  const imagenes = data && data.imagenes;
  const politicaDeCancelacion = data && data.politica_de_cancelacion;
  const politicaDeSaludYSeguridad = data && data.politica_de_salud_y_seguridad;
  const normasDeUso = data && data.politica_de_uso;
  const categoria = data && data.categoria.titulo.toUpperCase();
  const ciudad = data && data.ciudad.ciudad;
  const pais = data && data.ciudad.pais;


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [favorites, toggleItemInLocalStorage] = useFavorites();
  
  const isFavorite = favorites.includes(idNumber);

  return (
    <div className={styles.containerProduct}>
        <HeaderProduct category={categoria} title={nombre}/>
        <LocationProduct direction={direccion} city={ciudad} country={pais}/>
        <div className={styles.socialMediaContainer}>
          <SocialMediaShare url={`http://www.digitalbooking.ar/producto/${id}`}/>
          <Button event ={toggleItemInLocalStorage(idNumber)} css="btnFav" text={<Icon css="iconFavDetail" icon={isFavorite ? faSolideHeart : faRegularHeart} />}/>
        </div>
        <GalleryContainer images={imagenes}/>
        <DescriptionProduct title={titulo} description={descripcion} ciudad={ciudad} />
        <Features features={caracteristicas}/>
        <BookingCalendar />
        <Politics normas={normasDeUso} politicaSalud={politicaDeSaludYSeguridad} politicaCancelacion={politicaDeCancelacion}/>
    </div>
  )
}

export default Product;