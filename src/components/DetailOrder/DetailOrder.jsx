import { Box, Button, Card, CardContent, CardMedia, Grid, InputLabel, TextField, Typography } from '@mui/material'
import './DetailOrder.css'
import { useContext } from 'react'
import { ThemeContext } from '../Context/Theme'

function DetailOrder() {
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
      handleResumen,
      //category
      categoryId,
      //dates
      handleSendDate,
      handleReceiveDate,
      //details
      price,
      handlePrice,
      title,
      quantity,
      services,
      imgShipment,
      description,
      handleTitle,
      handleQuantity,
      handleService,
      handleImgShipment,
      handleDescription,
      //images
      imageService,
      getImageService,
    } = useContext(ThemeContext)

 




  return (
    <Grid id={'container-details'} container xs={12} sm={12} md={6} lg={6}>
      <Grid id="wrapper-details" container>
        <Grid className="grid-details" item xs={12} md={8}>
          <InputLabel>
            <Typography
              className="label-details"
              component={'label'}
              variant="body1"
            >
              ¿Que quieres enviar?
            </Typography>
          </InputLabel>
          <TextField
            value={title}
            onChange={handleTitle}
            style={{ background: '#fff', borderRadius: '4px' }}
            fullWidth
            placeholder="Ej: Pallet de mercacía fragil"
          />
        </Grid>
        <Grid className="grid-details" item xs={12} md={4}>
          <InputLabel>
            <Typography
              className="label-details"
              component={'label'}
              variant="body1"
            >
              Nº de artículos
            </Typography>
          </InputLabel>
          <TextField
            value={quantity}
            onChange={handleQuantity}
            style={{ background: '#fff', borderRadius: '4px' }}
            fullWidth
            placeholder="0"
          />
        </Grid>
        <Grid id="grid-price" item xs={12} sm={4} md={4}>
          <InputLabel>
            <Typography
              className="label-details"
              component={'label'}
              variant="body1"
            >
              Tipo de servicío:
            </Typography>
          </InputLabel>
        </Grid>
        <Grid className="grid-details" item xs={12} sm={8} md={8}>
          <TextField
            value={services}
            onChange={handleService}
            style={{ background: '#fff', borderRadius: '4px' }}
            fullWidth
            placeholder="Ej: Necesito ayuda a descargar la mercancía"
          />
        </Grid>

        <Grid className="grid-details" item xs={12} sm={12} md={6}>
          <InputLabel>
            <Typography
              className="label-details"
              component={'label'}
              variant="body1"
            >
              Añade una imagen:
            </Typography>
          </InputLabel>
          <TextField
            onChange={getImageService}
            style={{ background: '#fff', borderRadius: '4px' }}
            type="file"
            fullWidth
          />
        </Grid>
        {imageService && (
          <Grid className="grid-details" item xs={12} sm={12} md={6}>
            <CardMedia
              component="div"
              style={{
                height: '200px',
                flex: '1', // Asegura que el ancho sea el 100% del contenedor
                backgroundSize: 'contain', // Asegura que la imagen se ajuste completamente dentro del contenedor
                backgroundImage: `url(${imageService})`, // Utiliza la propiedad de imagen de fondo para tener un control más granular sobre cómo se muestra la imagen
                backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                backgroundPosition: 'center', // Centra la imagen dentro del contenedor
              }}
              alt="green iguana"
            />
          </Grid>
        )}

        <Grid className="grid-details" item xs={12} sm={12} md={12}>
          <InputLabel>
            <Typography
              className="label-details"
              component={'label'}
              variant="body1"
            >
              Añade una descripción:
            </Typography>
          </InputLabel>
          <TextField
            value={description}
            onChange={handleDescription}
            style={{ background: '#fff', borderRadius: '4px' }}
            fullWidth
            placeholder="Descripción"
          />
        </Grid>
        <Grid id="grid-price" item xs={12} sm={3} md={2}>
          <InputLabel>
            <Typography
              className="label-details"
              component={'label'}
              variant="body1"
            >
              Price:
            </Typography>
          </InputLabel>
        </Grid>
        <Grid id="grid-price" item xs={12} sm={3} md={4}>
          <TextField
            value={price}
            onChange={handlePrice}
            style={{ background: '#fff', borderRadius: '4px' }}
            fullWidth
            placeholder="€"
          />
        </Grid>
        <Grid className="grid-details" item xs={12} sm={6} md={6}>
          <Box id="content-route-button">
            <Button
              style={{ height: '3.4rem', width: '100%' }}
              variant="contained"
              onClick={handleResumen}
            >
              <Typography variant="button" color={'white'} fontWeight={700}>
                Ir a resumen
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default DetailOrder