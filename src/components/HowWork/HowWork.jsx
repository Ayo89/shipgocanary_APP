import { Box, Grid, Typography } from '@mui/material'
import './HowWork.css'

function HowWork() {
  return (
      <Grid className="text-body" container>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Typography gutterBottom variant="h3" style={{ color: '#0080FF' }}>
            ¿Como Funciona?
          </Typography>
          <Typography
            component={'p'}
            lineHeight={1.4}
            letterSpacing={0.7}
            variant="h4"
          >
            Ponemos en contacto a personas que necesitan realizar envíos con
            transportistas que van a hacer esa misma ruta <br />
            Tenemos el mejor transportista para ti. Envía cualquier tipo de
            artículo y a cualquier lugar de Europa..
          </Typography>
        </Grid>
      </Grid>
  )
}

export default HowWork