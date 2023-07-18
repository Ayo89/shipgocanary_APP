import React, { useEffect, useState } from 'react'
import SelectCategory from '../SelectCategory/SelectCategory'
import InputLabel from '@mui/material/InputLabel'
import './BudgetBar.css'
import { Autocomplete, Box, Button, Grid, TextField, Typography } from '@mui/material'
import { useContext } from 'react'
import { ThemeContext } from '../Context/Theme'

function BudgetBar( ) {
  const {
    desde,
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
    handleCreateShipmentStep,
  } = useContext(ThemeContext)

  const lala = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
  ]


  useEffect(() => {
    getAutocomplete2()
  }, [hasta])

  useEffect(() => {
    getAutocomplete()
  }, [desde])

  return (
    <Box className="container-budget">
      <Grid id='container-grid-budget' container >
        <SelectCategory />
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <InputLabel id="label-budget" htmlFor="component-outlined">
            <Typography variant="body1">¿Desde?</Typography>
          </InputLabel>
          <Autocomplete
            isOptionEqualToValue={(option, value) =>
              option.label !== value.label
            }
            className="imput-budget"
            id="imputs"
            value={desde ? desde : ''}
            options={direction ? direction : [{ label: 'not options' }]}
            label="Name"
            renderInput={(params) => (
              <TextField
                onSelect={(e) => setDesde(e.target.value)}
                type="text"
                {...params}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <InputLabel id="label-budget" htmlFor="component-outlined">
            <Typography variant="body1">¿Hasta?</Typography>
          </InputLabel>
          <Autocomplete
            isOptionEqualToValue={(option, value) =>
              option.label !== value.label
            }
            className="imput-budget"
            id="imputs"
            value={hasta ? hasta : ''}
            options={direction2 ? direction2 : [{ label: 'not options' }]}
            label="Name"
            renderInput={(params) => (
              <TextField
                onSelect={(e) => setHasta(e.target.value)}
                type="text"
                {...params}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} id="wrapper-buttom">
          <InputLabel  id="label-budget" htmlFor="component-outlined">
            <Typography variant="body1"></Typography>
          </InputLabel>
          <Button
            className="budget-buttom"
            style={{
              color: '#000',

              backgroundColor: 'var(--background-color',
            }}
            onClick={handleCreateShipmentStep}
          >
            <Typography variant="button">Pedir Presupuesto</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BudgetBar
