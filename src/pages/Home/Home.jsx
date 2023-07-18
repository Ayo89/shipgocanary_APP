import { HomeWork } from '@mui/icons-material'
import BudgetBar from '../../components/BudgetBar/BudgetBar'
import './Home.css'
import HowWork from '../../components/HowWork/HowWork'
import CardCarrier from '../../components/CardCarrier/CardCarrier'
import { Grid, Typography } from '@mui/material'

function Home() {
  return (
    <>
      <BudgetBar />
      <HowWork />
      <Grid container id="footer-home" columnGap={4} rowGap={4}>
        <Grid
        textAlign={'center'}
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Typography variant="h4" color="#0080FF">
            Estos y muchos mas transportistas trabajan ya con nosotros!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <CardCarrier />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <CardCarrier />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <CardCarrier />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={2}>
          <CardCarrier />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
