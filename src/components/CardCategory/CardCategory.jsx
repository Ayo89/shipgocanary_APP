import { Card, CardMedia } from '@mui/material'
import './CardCategory.css'
import imagen from '../../assets/Conoce-lo-que-hacen-las-empresas-de-mudanzas-para-ti.webp'




function CardCategory() {
  return (
      <CardMedia
        id="card-category"
        component="img"
        alt="green iguana"
        image={imagen}
      />

  )
}

export default CardCategory