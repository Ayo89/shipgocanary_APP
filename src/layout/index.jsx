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
import SelectRoute from "../components/SelectRoute/SelectRoute"
import Category from "../components/Category/Category"
import { getCategories } from "../../services/category.service"

const steps = ['Escoge una categoría', 'Escoge una ruta', 'Detalla tu pedido', 'Resumen']


function Root() {
  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')
  const [confirmDirections, setConfirmDirections] = useState(false)

  const [direction, setDirection] = useState('')
  const [direction2, setDirection2] = useState('')

  const [categoriesService, setCategoriesService] = useState([])

  //This is steps for the create Shipment
  const totalSteps = () => {
    return steps.length
  }

  const handleResumen = () => {
    setConfirmDirections(true)
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleCategory = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }


  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }
  const completedSteps = () => {
    return Object.keys(completed).length
  }
  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }
  
//This is the autocomplate and directions
  const handleDesde = (event, value) => {
    if (value) setDesde(value.label)
  }

  const handleHasta = (event, value) => {
    if (value) setHasta(value.label)
  }

  const getAutocomplete = async () => {
    const res = await getPlaces(desde)
    const data =
      res &&
      res.predictions &&
      res.predictions.map((option) => {
        const descriptionWithoutCommas = option.description.replace(/,/g, '')
        return { label: descriptionWithoutCommas }
      })
    setDirection(data && data)
  }

  const getAutocomplete2 = async () => {
    const res = await getPlaces(hasta)
    const data =
      res &&
      res.predictions &&
      res.predictions.map((option) => {
        const descriptionWithoutCommas = option.description.replace(/,/g, '')
        return { label: descriptionWithoutCommas }
      })
    setDirection2(data && data)
  }
//Categories

const getAllCategories = async () => {
  const res = await getCategories()
  const data =
    res &&
    res.map((option) => {
      return { label: option.name }
    })
  setCategoriesService(data)
}

useEffect(() => {
  getAllCategories()
},[])

console.log(categoriesService)

  const theme = {
    desde,
    hasta,
    direction,
    direction2,
    confirmDirections,
    setDirection,
    setDirection2,
    setDesde,
    setHasta,
    handleDesde,
    handleHasta,
    setConfirmDirections,
    getAutocomplete,
    getAutocomplete2,
    //themas steps
    steps,
    activeStep,
    completed,
    completedSteps,
    isLastStep,
    totalSteps,
    handleBack,
    handleNext,
    handleStep,
    handleResumen,
    allStepsCompleted,
    //categories
    categoriesService,
    setCategoriesService
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