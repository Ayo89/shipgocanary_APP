import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import { getUserLogged } from "../../services/user.service"
import HeaderLogged from "../components/HeaderLogged/HeaderLogged"
import { useEffect, useState } from "react"
import {  Box, Container } from "@mui/material"
import './index.css'
import '../components/HeaderLogged/HeaderLogged.css'
import { ThemeContext } from '../components/Context/Theme'
import { getPlaces } from '../../services/google.service'
function Root() {
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')
  const [confirmDirections, setConfirmDirections] = useState(false)

  const [direction, setDirection] = useState('')
  const [direction2, setDirection2] = useState('')

  const handleDesde = (event, value) => {
    event.prevent
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




  const theme = {
    desde,
    hasta,
    direction,
    direction2,
    confirmDirections,
    setConfirmDirections,
    setDirection,
    setDirection2,
    setDesde,
    setHasta,
    handleDesde,
    handleHasta,
    setConfirmDirections,
    getAutocomplete,
    getAutocomplete2,
  }

  const navigate = useNavigate()

  const changeHeader = () => {
    if (!localStorage.getItem('token')) return <Header />
    else {
      return (
        <>
          <HeaderLogged />
        </>
      )
    }
  }

  useEffect(() => {
    changeHeader()
  }, [localStorage])

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Box maxWidth="100" id="container-root">
          {changeHeader()}
          <Container id="container-body-layout" maxWidth="100">
            <Outlet />
          </Container>
          <Box id="footerito">Soy el footer de verdad!!!</Box>
        </Box>
      </ThemeContext.Provider>
    </>
  )
}

export default Root