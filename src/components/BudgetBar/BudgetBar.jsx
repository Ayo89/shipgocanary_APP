import React, { useEffect, useState } from 'react'
import SelectCategory from '../SelectCategory/SelectCategory'
import Box from '@mui/material/Box'
import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import './BudgetBar.css'
import { Autocomplete, Button, TextField, Typography } from '@mui/material'
import { getPlaces } from '../../../services/google.service'

function BudgetBar() {
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')
  const [direction, setDirection] = useState('')
  const [direction2, setDirection2] = useState('')



const lala = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
]

const handleDesde = (event, value) => {
  if (value) setDesde(value.label)
}

const handleHasta = (event, value) => {
  if (value) setHasta(value.label)
}


const getAutocomplete = async () => {
  const res = await getPlaces(desde)
  const data =
    res.predictions &&
    res.predictions.map((option) => {
      const descriptionWithoutCommas = option.description.replace(/,/g, '')
      return { label: descriptionWithoutCommas }
    })
  setDirection(data)
}

const getAutocomplete2 = async () => {
  const res = await getPlaces(hasta)
  const data =
    res.predictions &&
    res.predictions.map((option) => {
      const descriptionWithoutCommas = option.description.replace(/,/g, '')
      return { label: descriptionWithoutCommas }
    })
  setDirection2(data)
}

useEffect(() => {
  getAutocomplete2()
}, [hasta])

useEffect(() => {
  getAutocomplete()
}, [desde])

  return (
    <div className="container-budget">
      <div className="wrapper-budget">
        <SelectCategory />
        <div>
          <InputLabel id="label-budget" htmlFor="component-outlined">
            <Typography variant="body1">¿Desde?</Typography>
          </InputLabel>
          <Autocomplete
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            className="imput-budget"
            id="imputs"
            options={direction ? direction : [{ label: 'not options' }]}
            label="Name"
            onChange={handleDesde}
            renderInput={(params) => (
              <TextField
                onChange={(e) => setDesde(e.target.value)}
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
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            className="imput-budget"
            id="imputs"
            options={direction2 ? direction2 : [{ label: 'not options' }]}
            label="Name"
            onChange={handleHasta}
            renderInput={(params) => (
              <TextField
                onChange={(e) => setHasta(e.target.value)}
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
              height: '4rem',
              backgroundColor: 'var(--background-buttom',
            }}
          >
            <Typography variant="button">Pedir Presupuesto</Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BudgetBar
