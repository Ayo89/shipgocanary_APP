import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './HeaderLogged.css'
import logo from '../../assets/ship-go-canary-logo.png'
import { Link } from 'react-router-dom'
import MenuHeader from '../Menu/Menu'
import { Container } from '@mui/material'


function HeaderLogged() {
  return (
        <Toolbar style={{display: 'flex', backgroundColor: 'var(--background-color)'}}>
          <Box className="content-img">
            <img className="img-logo" src={logo} alt="imagen del logo" />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <MenuHeader />
        </Toolbar>
  )
}

export default HeaderLogged
