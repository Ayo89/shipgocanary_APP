import './CardCarrier.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import furgon from '../../assets/furgon-foton-3tn-vista-frontal3.jpg'
function CardCarrier() {
  return (
    <div id="container-card-carrier">
      <Card id="wrapper-card">
        <CardMedia
          id="header-card"
          component="img"
          alt="foto de camion"
          image={furgon}
        />
        <CardContent id="body-card">
          <Typography gutterBottom variant="h5">
            Pedro
          </Typography>
          <Typography variant='body1'>Transportista Villanueva de Gállego(Zaragoza)</Typography>
          <hr />
          <Typography variant='body1'>
            Valoración: <Typography variant='body1' component={'span'}  fontWeight={500}>99%</Typography>
          </Typography>
        </CardContent>
        <CardActions id="content-button">
          <Button  size="medium">Pedir presupuesto</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CardCarrier