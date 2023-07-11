import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import './Header.css'
import logo from '../../assets/ship-go-canary-logo.png'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          backgroundColor: 'var(--background-color)',
          height: '7.11rem',
          display: 'flex',
          justifyContent: 'center',
        }}
        position="static"
      >
        <Toolbar>
          <Box className="content-img">
            <img className="img-logo" src={logo} alt="imagen del logo" />
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button id="button">Login</Button>
          <Button
            id="button"
            style={{
              width: '9.89rem',
              height: '2.89rem',
              backgroundColor: 'var(--background-buttom',
              marginLeft: '2.4rem',
            }}
          >
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
