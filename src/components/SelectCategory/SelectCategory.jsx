import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import './SelectCategory.css'
import { Autocomplete, TextField, Typography } from '@mui/material'

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
const [category, setCategory] = useState()


const handleCategory = (e) => {
setCategory(e.target.value)
}


  
  return (
    <div id="content-imput">
      <InputLabel id="label-budget" htmlFor="component-outlined">
        <Typography variant="body1">Selecciona una categoría</Typography>
      </InputLabel>
      <Autocomplete
        className="imput-budget"
        id="imputs"
        options={lala}
        label="Name"
        onChange={handleCategory}
        renderInput={(params) => (
          <TextField
            value={category}
            onChange={handleCategory}
            type="text"
            {...params}

          />
        )}
      />
    </div>
  )
}
