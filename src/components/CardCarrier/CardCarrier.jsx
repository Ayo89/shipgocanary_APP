import './CardCarrier.css'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import furgon from '../../assets/furgon-foton-3tn-vista-frontal3.jpg'
import furgon1 from '../../assets/transportista1.avif'
import furgon2 from '../../assets/transportista2.jpg'
import furgon3 from '../../assets/transportista3.jpg'
import { Grid } from '@mui/material'

const imgs = [
  {
    name: 'Pedro',
    img: furgon,
    description: 'Transportista Villanueva de Gállego(Zaragoza)',
  },
  {
    name: 'Juan',
    img: furgon1,
    description: 'Transportista Jinamar (Las Palmas)',
  },
  {
    name: 'Yeray lp',
    img: furgon2,
    description: 'Transportista Telde (Gran Canaria)',
  },
  {
    name: 'Ramses',
    img: furgon3,
    description: 'Transportista Tejeda (Gran canaria)',
  },
]

function CardCarrier() {
    return imgs.map((item, index) => (
      <Grid
        id="container-card-carrier"
        key={index}
        item
        xs={12}
        sm={12}
        md={4}
        lg={2}
      >
          <Card id="wrapper-card">
            <CardMedia
              id="header-card"
              component="img"
              alt="foto de camion"
              image={item.img}
            />
            <CardContent id="body-card">
              <Typography gutterBottom variant="h5">
                {item.name}
              </Typography>
              <Typography variant="body1">{item.description}</Typography>
              <hr />
              <Typography variant="body1">
                Valoración:{' '}
                <Typography variant="body1" component={'span'} fontWeight={500}>
                  99%
                </Typography>
              </Typography>
            </CardContent>
            <CardActions id="content-button">
              <Button size="large">Pedir presupuesto</Button>
            </CardActions>
          </Card>
      </Grid>
    ))
}

export default CardCarrier
