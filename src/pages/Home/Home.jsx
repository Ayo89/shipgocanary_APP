import { HomeWork } from '@mui/icons-material'
import BudgetBar from '../../components/BudgetBar/BudgetBar'
import './Home.css'
import HowWork from '../../components/HowWork/HowWork'
import CardCarrier from '../../components/CardCarrier/CardCarrier'
import { Grid, Typography } from '@mui/material'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../components/Context/Theme'

function Home() {
  const {
    desde,
    confirmDirections,
    setConfirmDirections,
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
    //steps
    handleDetails,
    //category
    categoryId,
    //dates
    sendDate,
    receiveDate,
    handleSendDate,
    handleReceiveDate,
    directions,
    distance,
    getDirections,
    getDistance,
    map,
    setMap,
    getAllCategories,
    setSendDate,
    setReceiveDate,
    setDistance,
    setImageService,
    setTitle,
    setQuantity,
    setServices,
    setDescription,
    setPrice,
  } = useContext(ThemeContext)



  useEffect(() => {
    getAllCategories()
  }, [])

  return (
    <>
      <BudgetBar />
      <HowWork />
      <Grid container id="footer-home" columnGap={4} rowGap={4}>
        <Grid textAlign={'center'} item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" color="#0080FF">
            Estos y muchos mas transportistas trabajan ya con nosotros!
          </Typography>
        </Grid>
        <CardCarrier />
      </Grid>
    </>
  )
}

export default Home
