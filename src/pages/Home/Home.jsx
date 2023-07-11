
import { HomeWork } from '@mui/icons-material'
import BudgetBar from '../../components/BudgetBar/BudgetBar'
import './Home.css'
import HowWork from '../../components/HowWork/HowWork'

function Home() {
  return (

    <div className="container">    
            <BudgetBar/>
            <HowWork />
    </div>  
  )
}

export default Home