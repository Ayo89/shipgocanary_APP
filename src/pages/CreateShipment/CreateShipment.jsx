import './CreateShipment.css'

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
import { useContext } from 'react'
import DetailOrder from '../../components/DetailOrder/DetailOrder'
import Resumen from '../../components/Resumen/Resumen'


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
    //steps
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
    handleDetails,
  } = useContext(ThemeContext)


  const selectedStep = () => {
    if (activeStep === 0) {
      return <Category/>

    } else if (activeStep === 1) {
      return <SelectRoute step={handleDetails} />
    }
    else if(activeStep === 2) {
      return <DetailOrder/>
    }
    else if(activeStep === 3) {
     return <Resumen/>
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