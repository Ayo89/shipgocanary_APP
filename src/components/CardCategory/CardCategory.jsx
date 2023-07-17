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



function CardCategory({ step }) {
    const [categoriesService, setCategoriesService] = useState([])
  const {
    //steps
    handleCategoryStep,

  } = useContext(ThemeContext)

const getAllCategories = async () => {
    const res = await getCategories()
    setCategoriesService(res)
}

useEffect(() => {
getAllCategories()
},[])


console.log(categoriesService)

    return categoriesService && categoriesService.map((item) => (
      <Grid
        key={item._id}
        className="item-grid"
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
      >
        <Link
          id="card-category"
          onClick={(e) => handleCategoryStep(item._id)}
        >
          <Typography
    
            color={'var(--background-button)'}
            textAlign={'center'}
            variant="h6"
          >
            {item.name}
          </Typography>
          <CardMedia

            component="div"
            style={{
              height: '300px',
              flex: '1',
              width: '100%',
              objectFit: 'cover',
              border: '1px solid var(--background-color)',
            }}
            alt="green iguana"
            image={item.img}
          />
        </Link>
      </Grid>
    ))
}

export default CardCategory