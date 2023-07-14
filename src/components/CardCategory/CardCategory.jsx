import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import './CardCategory.css'
import imagen from '../../assets/Conoce-lo-que-hacen-las-empresas-de-mudanzas-para-ti.webp'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../services/category.service'
import { useEffect, useState } from 'react'



function CardCategory({step}) {
const [categories, setCategories] = useState([])
  const getAllcategories = async () => {
    const res = await getCategories()
    setCategories(res)
  }

  useEffect(() => {
    getAllcategories()
  }, [])

  console.log(categories && categories)
  return (
    <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
      <Link id="card-category" onClick={step}>
        <Typography>{categories[0] && categories[0].name}</Typography>
        <CardMedia
          component="img"
          style={{ height: '300px' }}
          alt="green iguana"
          image={categories[0] && categories[0].img}
        />
      </Link>
    </Grid>
  )
}

export default CardCategory