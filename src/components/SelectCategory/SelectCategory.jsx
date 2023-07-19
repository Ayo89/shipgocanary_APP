import React, { useContext, useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import './SelectCategory.css'
import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
import { ThemeContext } from '../Context/Theme'

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
    categoryId,
    setCategoryId,
    setCategoriesService,
  } = useContext(ThemeContext)

  const filterCategory = () => {
    const res = categories
      .filter((item) => item.label === category)
      .map((item) => item.index)
    setCategoryId(res[0])
  }

  useEffect(() => {
    filterCategory()
  }, [category])

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
          <TextField value={categoryId} type="text" {...params} />
        )}
      />
    </Grid>
  )
}
