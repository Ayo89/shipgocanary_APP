
import { HomeWork } from '@mui/icons-material'
import BudgetBar from '../../components/BudgetBar/BudgetBar'
import './Home.css'
import HowWork from '../../components/HowWork/HowWork'
import CardCarrier from '../../components/CardCarrier/CardCarrier'
import { Typography } from '@mui/material'

function Home() {
  return (
    <div className="container">
      <BudgetBar />
      <HowWork />
      <div
        style={{
          width: '100%',
          height: '4rem',
          display: 'flex',
          justifyContent: 'start',
        }}
      >
        <Typography variant="h4" color="#0080FF">
          Estos y muchos mas transportistas trabajan ya con nosotros!
        </Typography>
      </div>
      <div id="footer-body">
        <CardCarrier />
        <CardCarrier />
        <CardCarrier />
        <CardCarrier />
        <CardCarrier />
      </div>
    </div>
  )
}

export default Home