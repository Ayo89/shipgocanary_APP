import { useContext, useEffect, useState } from 'react'
import './SelectRoute.css'
import {
  GoogleMap,
  LoadScriptNext,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { ThemeContext } from '../Context/Theme'
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'

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

function SelectRoute({ step }) {
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
    handleDetails,
    //category
    categoryId,
    //dates
    sendDate,
    receiveDate,
    handleSendDate,
    handleReceiveDate,
    directions,
    distance,
    getDirections,
    getDistance,
    map,
    setMap,
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
    <>
      <Box id="container-route">
        <Box id="wrapper-imput-route">
          <Box id="header-route">
            <Box>
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
            </Box>
            <Box>
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
            </Box>
            <Box
              display={'flex'}
              flexDirection={'column'}
              width={'60%'}
              gap={1}
            >
              <Button
                style={{
                  backgroundColor:
                    'var(--background-color)',
                }}
                variant="contained"
                onClick={(e) => setConfirmDirections(true)}
              >
                <Typography variant="button" color={'#000'} fontWeight={700}>
                  Click here and see route and distance
                </Typography>
              </Button>
              <Typography variant="body1">
                Distacia:{' '}
                <Typography
                  variant="body1"
                  color={'#000'}
                  fontWeight={700}
                  component={'span'}
                >
                  {distance.length !== '' && distance}
                </Typography>
              </Typography>
            </Box>
          </Box>
          <Box id="footer-route">
            <Box>
              <InputLabel id="label-budget" htmlFor="component-outlined">
                <Typography variant="h5" color={'#000'}>
                  Fecha de recogida
                </Typography>
              </InputLabel>
              <TextField
                value={sendDate ? sendDate : ''}
                onChange={handleSendDate}
                onFocus={handleSendDate}
                type="date"
              />
            </Box>
            <Box>
              <InputLabel id="label-budget" htmlFor="component-outlined">
                <Typography variant="h5" color={'#000'}>
                  Fecha de entrega
                </Typography>
              </InputLabel>
              <TextField
                value={receiveDate ? receiveDate : ''}
                onChange={handleReceiveDate}
                onFocus={handleReceiveDate}
                type="date"
              />
            </Box>
            <Box id="content-route-button">
              <Button
                id="button-route"
                variant="contained"
                onClick={handleDetails}
              >
                <Typography variant="button" color={'#000'} fontWeight={700}>
                  Ir a detalles
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
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
      </Box>
    </>
  )
}

export default SelectRoute
