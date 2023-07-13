import { Box, Card, CardMedia, Typography } from '@mui/material'
import './CardCategory.css'
import imagen from '../../assets/Conoce-lo-que-hacen-las-empresas-de-mudanzas-para-ti.webp'




function CardCategory() {
  return (
    <Box id='card-category'>
      <Typography>Mudanzas</Typography>
      <CardMedia
        component="img"
        alt="green iguana"
        image={imagen}
      />
    </Box>
  )
}

export default CardCategory