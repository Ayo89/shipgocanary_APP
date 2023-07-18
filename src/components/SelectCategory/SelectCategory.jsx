import React, { useContext, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import './SelectCategory.css'
import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
import { ThemeContext } from '../Context/Theme'

const lala = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
]



export default function SelectCategory() {
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
    categories,
    category,
    handleCategory,
    setCategoriesService,
  } = useContext(ThemeContext)





console.log(category)
  
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} id="content-imput">
      <InputLabel id="label-budget" htmlFor="component-outlined">
        <Typography variant="body1">Selecciona una categoría</Typography>
      </InputLabel>
      <Autocomplete
        className="imput-budget"
        id="imputs"
        options={categories}
        label="Name"
        onSelect={handleCategory}
        renderInput={(params) => (
          <TextField onChange={handleCategory} type="text" {...params} />
        )}
      />
    </Grid>
  )
}
