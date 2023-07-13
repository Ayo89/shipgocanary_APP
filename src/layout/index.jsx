import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header/Header"
import { getUserLogged } from "../../services/user.service"
import HeaderLogged from "../components/HeaderLogged/HeaderLogged"
import { useEffect } from "react"
import { AppBar, Box, Container } from "@mui/material"
import './index.css'
import '../components/HeaderLogged/HeaderLogged.css'
function Root() {


const navigate = useNavigate()


  const changeHeader = () => {

    if (!localStorage.getItem('token'))
      return (
        <Header/>
      )
    else {
      return (
        <>
        <HeaderLogged/>
        </>

      )
    }
  }

  useEffect(() => {
    changeHeader()
  },[localStorage])

  return (
    <>
      {/*    <Box maxWidth='100' id='container-root'>
      <AppBar id='content-header' maxWidth="100">
        {changeHeader()}
      </AppBar>
      
        <Outlet />
      
    </Box> */}

      <Box maxWidth="100" id="container-root">
        {changeHeader()}
        <Container id="container-body-layout" maxWidth="100">
          <Outlet />
        </Container>
        <Box id="footerito">Soy el footer de verdad!!!</Box>
      </Box>
    </>
  )
}

export default Root