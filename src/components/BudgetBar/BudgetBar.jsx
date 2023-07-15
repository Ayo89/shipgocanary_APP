import React, { useEffect, useState } from 'react'
import SelectCategory from '../SelectCategory/SelectCategory'
import InputLabel from '@mui/material/InputLabel'
import './BudgetBar.css'
import { Autocomplete, Button, TextField, Typography } from '@mui/material'
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
    <div className="container-budget">
      <SelectCategory />
      <div>
        <InputLabel id="label-budget" htmlFor="component-outlined">
          <Typography variant="body1">¿Desde?</Typography>
        </InputLabel>
        <Autocomplete
          isOptionEqualToValue={(option, value) => option.label === value.label}
          className="imput-budget"
          id="imputs"
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
      </div>
      <div>
        <InputLabel id="label-budget" htmlFor="component-outlined">
          <Typography variant="body1">¿Hasta?</Typography>
        </InputLabel>
        <Autocomplete
          isOptionEqualToValue={(option, value) => option.label === value.label}
          className="imput-budget"
          id="imputs"
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
      </div>
      <div id="wrapper-buttom">
        <Button
          className="budget-buttom"
          style={{
            color: '#000',
            height: '4.4rem',
            backgroundColor: 'var(--background-buttom',
          }}
        >
          <Typography variant="button">Pedir Presupuesto</Typography>
        </Button>
      </div>
    </div>
  )
}

export default BudgetBar
