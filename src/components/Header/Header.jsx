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
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Toolbar
      style={{ display: 'flex', backgroundColor: 'var(--background-color)' }}
    >
      <Box className="content-img">
        <img className="img-logo" src={logo} alt="imagen del logo" />
      </Box>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1 }}
      ></Typography>
      <Button id="button">
        <Link style={{ textDecoration: 'none', color: '#000' }} to="/login">
          <Typography variant="button">LOGIN</Typography>
        </Link>
      </Button>
      <Link to="/signup" style={{ textDecoration: 'none', color: '#000' }}>
        <Button
          id="button"
          style={{
            width: '9.89rem',
            height: '2.89rem',
            backgroundColor: 'var(--background-buttom',
            marginLeft: '2.4rem',
          }}
        >
          <Typography variant="button">SIGNUP</Typography>
        </Button>
      </Link>
    </Toolbar>
  )
}
