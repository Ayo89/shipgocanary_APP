import { useNavigate, Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import { getUserLogged } from '../../services/user.service'
import HeaderLogged from '../components/HeaderLogged/HeaderLogged'
import { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import './index.css'
import '../components/HeaderLogged/HeaderLogged.css'
import { ThemeContext } from '../components/Context/Theme'
import { getPlaces } from '../../services/google.service'
import SelectRoute from '../components/SelectRoute/SelectRoute'
import Category from '../components/Category/Category'
import {
  getCategories,
  updateShipmentCategory,
} from '../../services/category.service'
import { createShipmentService } from '../../services/shipment.service'
import { getImage } from '../../services/image.service'


const steps = [
  'Escoge una categoría',
  'Escoge una ruta',
  'Detalla tu pedido',
  'Resumen',
]

function Root() {

  const [directions, setDirections] = useState(null)
  const [distance, setDistance] = useState('')
  const [map, setMap] = useState(null)

  const [activeStep, setActiveStep] = useState(0)
  const [completed, setCompleted] = useState({})
  const [desde, setDesde] = useState('')
  const [hasta, setHasta] = useState('')
  const [confirmDirections, setConfirmDirections] = useState(false)
  const [shipment, setShipment] = useState({})
  const [category, setCategory] = useState('')
  const [categoryId, setCategoryId] = useState('')

  const [direction, setDirection] = useState('')
  const [direction2, setDirection2] = useState('')
  const [categories, setCategories] = useState([])

  const [sendDate, setSendDate] = useState('')
  const [receiveDate, setReceiveDate] = useState('')

  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState('')
  const [services, setServices] = useState('')
  const [imgShipment, setImgShipment] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const [imageService, setImageService] = useState('')

  const navigate = useNavigate()
  //Map

  const getDirections = (res) => {
    if (res && res.status === 'OK') {
      setDirections(res)
      setConfirmDirections(false)
    }
  }
  const getDistance = () => {
    if (directions) {
      setDistance(directions.routes[0].legs[0].distance.text)
    }
  }

  //Details

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const handleService = (e) => {
    setServices(e.target.value)
  }

  const handleImgShipment = (e) => {
    setImgShipment(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  //dates

  const handleSendDate = (e) => {
    setSendDate(e.target.value)
  }
  const handleReceiveDate = (e) => {
    setReceiveDate(e.target.value)
  }

  //This is steps for the create Shipment
  const totalSteps = () => {
    return steps.length
  }

  const handleDetails = () => {
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

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const getAllCategories = async () => {
    const res = await getCategories()
    const data =
      res &&
      res.map((option) => {
        return { label: option.name, index: option._id }
      })
    setCategories(data)
  }

  useEffect(() => {
    getAllCategories()
  }, [])

  const addCategoryToShipment = async (category_id) => {
    const { data } = await updateShipmentCategory(category_id)
    return data
  }

  //images
  const getImageService = async (event) => {
    const file = event.target.files[0]
    const data = await getImage(file)
    setImageService(data)
  }

  //SHIPMENTS
  const createShipment = async () => {
    const res = await createShipmentService(
      categoryId,
      desde,
      hasta,
      sendDate,
      receiveDate,
      title,
      quantity,
      services,
      imageService,
      description,
      price
    )
    setShipment(res)
       setDesde('')
       setHasta('')
       setSendDate('')
       setReceiveDate('')
       setDistance('')
       setImageService('')
       setTitle('')
       setQuantity('')
       setServices('')
       setDescription('')
       setPrice('')

    navigate('/')
  }
  const handleResumen = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }


  const handleCreateShipmentStep = () => {
    if (localStorage.getItem('token')) {
      if (category === '') {
        setActiveStep(0)
        navigate('/create-shipment')
      } else {
        setActiveStep(1)
        navigate('/create-shipment')
      }
    } else {
      navigate('/login')
    }
  }
  const handleCategoryStep = async (category_id) => {
    setCategoryId(category_id)
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const theme = {
    desde,
    hasta,
    direction,
    direction2,
    confirmDirections,
    setDirection,
    setDirection2,
    setDesde,
    setSendDate,
    setReceiveDate,
    setDistance,
    setHasta,
    handleDesde,
    handleHasta,
    setImageService,
    setTitle,
    setQuantity,
    setServices,
    setDescription,
    setPrice,
    setConfirmDirections,
    getAutocomplete,
    getAutocomplete2,
    handleCategoryStep,
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
    handleCreateShipmentStep,
    //categories
    categoryId,
    categories,
    category,
    setCategoryId,
    handleCategory,
    //dates
    sendDate,
    receiveDate,
    handleSendDate,
    handleReceiveDate,
    //details
    title,
    quantity,
    services,
    imgShipment,
    description,
    price,
    handlePrice,
    handleTitle,
    handleQuantity,
    handleService,
    handleImgShipment,
    handleDescription,
    handleDetails,
    //map
    directions,
    distance,
    getDirections,
    getDistance,
    map,
    setMap,
    //shipmets
    createShipment,
    //images
    imageService,
    getImageService,
    getAllCategories,
    API_KEY,
  }

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

          <Grid id="container-body-layout" maxWidth="100">
            <Outlet />
          </Grid>
          <Box id="footerito">
            {' '}
            <Typography>&#169; Copyright 2023 por Ayoze</Typography>
          </Box>
        </Box>
      </ThemeContext.Provider>
    </>
  )
}

export default Root
