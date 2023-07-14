import './CreateShipment.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardCategory from '../../components/CardCategory/CardCategory'
import Category from '../../components/Category/Category'
import SelectRoute from '../../components/SelectRoute/SelectRoute'
import { ThemeContext } from '../../components/Context/Theme'

const steps = ['Escoge una categoría', 'Escoge una ruta', 'Detalla tu pedido', 'Resumen']

export default function CreateShipment() {
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
  } = React.useContext(ThemeContext)
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState({})

  const totalSteps = () => {
    return steps.length
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

  const selectedStep = () => {
    if(activeStep === 0){
      return <Category step={handleNext} />

    } else if(activeStep === 1){
      return <SelectRoute step={handleResumen} />
    }
  }



  return (
    <>
      <Stepper
        style={{ width: 'inherit' }}
        id="wrapper-header-stepper"
        nonLinear
        activeStep={activeStep}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <Typography variant="body1">{label}</Typography>
            </StepButton>
          </Step>
        ))}
      </Stepper>

      {selectedStep()}
     
    </>
  )
}