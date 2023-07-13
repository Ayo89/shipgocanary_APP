import * as React from 'react'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import CardCategory from '../CardCategory/CardCategory'
import './Category.css'
import { Container } from '@mui/material'

function Category() {
  return (
    <>
      <Container
        id="container-category"
        maxWidth="100"
        
      >
        <Grid container spacing={2}>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
{/*           <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid>
          <Grid className="item-grid" item xs={12} sm={6} md={4} lg={3}>
            <CardCategory />
          </Grid> */}
        </Grid>
      </Container>
    </>
  )
}

export default Category
