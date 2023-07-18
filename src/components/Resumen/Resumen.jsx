import { useContext, useEffect } from 'react'
import './Resumen.css'
import { ThemeContext } from '../Context/Theme'
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScriptNext,
} from '@react-google-maps/api'
import { Autocomplete, Box, Button, CardMedia, Grid, InputLabel, TextField, Typography } from '@mui/material'

function Resumen() {
  const API_KEY = 'AIzaSyBfQB6JYLKVUG80JLz26cZCzTkN-PKHF-Y'

  const containerStyle = {
    height: '600px',
    flex: '1',
  }

  const defaultCenter = {
    lat: -3.745,
    lng: -38.523,
  }

  const libraries = ['places']

  const {
    desde,
    hasta,
    direction,
    direction2,
    confirmDirections,
    setDirection,
    setDirection2,
    setDesde,
    setHasta,
    handleDesde,
    handleHasta,
    setConfirmDirections,
    getAutocomplete,
    getAutocomplete2,
    handleCategory,
    //themas steps
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
    allStepsCompleted,
    //categories
    categoryId,
    categories,
    //dates
    sendDate,
    receiveDate,
    handleSendDate,
    handleReceiveDate,
    //details
    title,
    quantity,
    services,
    imgShipment,
    description,
    price,
    handlePrice,
    handleTitle,
    handleQuantity,
    handleService,
    handleImgShipment,
    handleDescription,
    handleDetails,
    directions,
    distance,
    getDirections,
    getDistance,
    map,
    setMap,
    //image
    imageService,
    //shipments
    createShipment,
  } = useContext(ThemeContext)


    useEffect(() => {
      getDistance()
    }, [directions])

    useEffect(() => {
      getAutocomplete2()
    }, [hasta])

    useEffect(() => {
      getAutocomplete()
    }, [desde])
  return (
    <div id="container-resumen">
      <Grid container spacing={2}>
        <Grid display={'flex'} flexDirection={'column'} item xs={12} sm={5}>
          <Grid id="header-resumen" container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4">Titulo: {title}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <InputLabel id="label-budget" htmlFor="component-outlined">
                <Typography variant="h4" color={'#000'}>
                  ¿Desde?
                </Typography>
              </InputLabel>
              <Autocomplete
                isOptionEqualToValue={(option, value) =>
                  option.label !== value.label
                }
                className="imput-budget"
                id="imputs"
                value={desde ? desde : ''}
                options={direction ? direction : [{ label: 'Not option' }]}
                label="Name"
                renderInput={(params) => (
                  <TextField
                    value={desde}
                    onSelect={(e) => setDesde(e.target.value)}
                    type="text"
                    {...params}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <InputLabel id="label-budget" htmlFor="component-outlined">
                <Typography variant="h4" color={'#000'}>
                  ¿Hasta?
                </Typography>
              </InputLabel>
              <Autocomplete
                isOptionEqualToValue={(option, value) =>
                  option.label !== value.label
                }
                className="imput-budget"
                id="imputs"
                value={hasta ? hasta : ''}
                options={
                  direction2
                    ? direction2
                    : [{ label: 'Introduce una dirección' }]
                }
                label="Name"
                renderInput={(params) => (
                  <TextField
                    value={hasta}
                    onSelect={(e) => setHasta(e.target.value)}
                    type="text"
                    {...params}
                  />
                )}
              />
            </Grid>
          </Grid>
          <div id="footer-resumen">
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <Typography className="text-resumen" variant="body1">
                  Distancia:{' '}
                  <Typography
                    className="text-resumen"
                    variant="body1"
                    color={'#000'}
                    fontWeight={700}
                    component={'span'}
                  >
                    {distance.length !== '' && distance}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography className="text-resumen" variant="body1">
                  Fecha de recogida:{' '}
                  <Typography
                    className="text-resumen"
                    variant="body1"
                    color={'#000'}
                    fontWeight={700}
                    component={'span'}
                  >
                    {sendDate}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography className="text-resumen" variant="body1">
                  Fecha de entrega:{' '}
                  <Typography
                    className="text-resumen"
                    variant="body1"
                    color={'#000'}
                    fontWeight={700}
                    component={'span'}
                  >
                    {receiveDate}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography className="text-resumen" variant="body1">
                  Precio:{' '}
                  <Typography
                    className="text-resumen"
                    variant="body1"
                    color={'#000'}
                    fontWeight={700}
                    component={'span'}
                  >
                    {price}
                  </Typography>
                </Typography>
              </Grid>
              <Grid
                style={{
                  padding: '14px 0',
                }}
                item
                xs={10}
                sm={10}
                md={12}
              >
                <CardMedia
                  component="div"
                  style={{
                    height: '160px',
                    flex: '1', // Asegura que el ancho sea el 100% del contenedor
                    backgroundSize: 'contain', // Asegura que la imagen se ajuste completamente dentro del contenedor
                    backgroundImage: `url(${imageService})`, // Utiliza la propiedad de imagen de fondo para tener un control más granular sobre cómo se muestra la imagen
                    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
                    backgroundPosition: 'center', // Centra la imagen dentro del contenedor
                  }}
                  alt="green iguana"
                />
              </Grid>
              <Grid id="content-button" item xs={12} sm={12}>
                <Grid item xs={6} sm={6} id="content-button">
                  <Button
                    id="button-route"
                    style={{ height: '3.4rem' }}
                    variant="contained"
                    onClick={createShipment}
                  >
                    <Typography
                      variant="button"
                      color={'#000'}
                      fontWeight={700}
                    >
                      crear pedido
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12} sm={7}>
          <LoadScriptNext googleMapsApiKey={API_KEY}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={10}
              onLoad={(map) => setMap(map)}
            >
              {confirmDirections && desde && hasta && (
                <DirectionsService
                  options={{
                    origin: desde,
                    destination: hasta,
                    travelMode: 'DRIVING',
                  }}
                  callback={(res) => getDirections(res)}
                />
              )}

              {directions && (
                <DirectionsRenderer
                  options={{
                    directions: directions,
                  }}
                />
              )}
            </GoogleMap>
          </LoadScriptNext>
        </Grid>
      </Grid>
    </div>
  )
}

export default Resumen
