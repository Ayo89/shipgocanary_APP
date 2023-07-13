import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'

import './Login.css'
import { login } from '../../../services/auth.service'
import { getUserLogged } from '../../../services/user.service'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPassVisible, setIsPassVisible] = useState(false)

  const navigate = useNavigate()

  const handleClick = () => {
    setIsPassVisible(!isPassVisible)
  }

  const handleEmail = (value) => {
    setEmail(value.target.value)
  }

  const handlePassword = (value) => {
    setPassword(value.target.value)
  }

  const logIn = async () => {
    await login(email, password)

    const user = await getUserLogged()
    if (!localStorage.getItem('token'))
      return alert('Error: user or password wrong')
    else navigate('/')
  }

  return (
    <>
      <div className="login-container">
        <Card id="card-login">
          <Typography variant="h4">Login</Typography>
          <CardContent id="content-imput">
            <TextField
              id="input"
              label="Email"
              variant="filled"
              onChange={handleEmail}
            />
            <TextField
              id="input"
              label="Password"
              variant="filled"
              onChange={handlePassword}
              type={isPassVisible ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <div style={{ backgroundColor: 'white', height: '100%' }}>
                    <IconButton
                      style={{
                        backgroundColor: 'inherit',
                        height: '17.25px',
                        padding: '24px',
                      }}
                      onClick={handleClick}
                    >
                      {isPassVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </div>
                ),
              }}
            />
          </CardContent>
          <CardActions id="content-button">
            <Button id="login-button" variant="contained" onClick={logIn}>
              <Typography variant="button" color={'#000'} fontWeight={700}>
                Login
              </Typography>
            </Button>
          </CardActions>
          <div className="content-footer">
            <Typography variant="body1" className="forgot-password">
              Forgot password
            </Typography>
            <Typography className="button-scale" variant="body1">
              <Link
                style={{ textDecoration: 'none', color: '#000' }}
                to="/signup"
              >
                Sign up
              </Link>
            </Typography>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Login
