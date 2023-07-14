import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import CardCategory from '../CardCategory/CardCategory'
import './Category.css'
import { Container } from '@mui/material'

function Category({step}) {
  console.log(step)
  return (
    <>
        <Grid container id='grid-container'>
            <CardCategory step={step} />
            <CardCategory step={step} />
            <CardCategory step={step} />
            <CardCategory step={step} />
            <CardCategory step={step} />
            <CardCategory step={step} />
            <CardCategory step={step} />
            <CardCategory step={step} />
        </Grid>
    </>
  )
}

export default Category
