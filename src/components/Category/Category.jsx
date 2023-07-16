import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import CardCategory from '../CardCategory/CardCategory'
import './Category.css'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

function Category({step}) {
  return (
    <>
        <Grid container id='grid-container'>
        <CardCategory onClick={step} /> 
        </Grid>
    </>
  )
}

export default Category
