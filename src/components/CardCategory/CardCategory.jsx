import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import './CardCategory.css'
import imagen from '../../assets/Conoce-lo-que-hacen-las-empresas-de-mudanzas-para-ti.webp'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../services/category.service'
import { useContext, useEffect, useState } from 'react'
import barco from '../../assets/istockphoto-507037484-612x612.jpg'
import coche from '../../assets/El-coche-como-lienzo-31-Custom-Chevrolet-Sedan-1950-Low-Rider-Family-Car-was-created-by-Gilbert-“Magu”-Luján.jpg'
import mercancia from '../../assets/download.jpeg'
import mascota from '../../assets/segurmania_mascotas_destacada.jpg'
import moto from '../../assets/nmoto-golden-age-concept.jpg'
import pallet from '../../assets/istockphoto-617603758-612x612.jpg'
import mudanza from '../../assets/Mejores-furgonetas-para-hacer-mudanzas-1030x664.jpg'
import maquinaria from '../../assets/2791134.jpeg'
import { ThemeContext } from '../Context/Theme'

const categories = [
  {
    "name": "Mudanzas",
    "img": mudanza
  },
  {
    "name": "Coches",
    "img": coche
  },
  {
    "name": "Motos",
    "img": moto
  },
  {
    "name": "Mercancias",
    "img": mercancia
  },
  {
    "name": "Pallets",
    "img": pallet
  },
  {
    "name": "Mascotas",
    "img": mascota
  },
  {
    "name": "Envarcacion",
    "img": barco
  },
  {
    "name": "Maquinaria",
    "img": maquinaria
  },

]




function CardCategory({ step }) {
  const {
    desde,
    confirmDirections,
    setConfirmDirections,
    setDesde,
    hasta,
    setHasta,
    handleDesde,
    handleHasta,
    direction,
    direction2,
    setDirection,
    setDirection2,
    getAutocomplete,
    getAutocomplete2,
    //steps
    steps,
    activeStep,
    completed,
    completedSteps,
    isLastStep,
    totalSteps,
    handleBack,
    handleNext,
    handleStep,
    handleResumen,
    allStepsCompleted
  } = useContext(ThemeContext)

  /* const [categories, setCategories] = useState([])
  
    const getAllcategories = async () => {
      const res = await getCategories()
      setCategories(res)
    }  */

  
  /* 
    useEffect(() => {
      if(categories){
        getAllcategories()
      }
    }, []) */

    return (
    categories.map((item, index) => (
      <Grid key={index} className="item-grid" item xs={12} sm={6} md={4} lg={3}>
        <Link id="card-category" onClick={handleNext}>
          <Typography color={'var(--background-button)'} textAlign={'center'} variant='h6'>{item.name}</Typography>
            <CardMedia
              component="div"
            style={{ height: '300px', flex:'1', width:'100%', objectFit: 'cover' }}
              alt="green iguana"
              image={item.img}
            />
      </Link>
      </Grid>
    )))
}

export default CardCategory