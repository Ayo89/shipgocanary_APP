import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../../components/Header/Header'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'

import './Signup.css'

import { signup } from '../../../services/auth.service'
import { getUsers } from '../../../services/user.service'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passRegex = /^(?=.*\d)(.{5,})\1$/

function Signup() {
  const [isPassvisible, setIsPassVisible] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [valid, setValid] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [validRepeatPassword, setValidRepeatPassword] = useState(false)
  const [user, setUser] = useState([])

  const getUsersEmail = async () => {
    if (localStorage.getItem('token')) {
      const res = await getUsers()
      setUser(res)
    }
  }

  useEffect(() => {
    getUsersEmail()
  }, [])

  const navigate = useNavigate()

  const validateName = (e) => {
    const name = e.target.value
    setName(name)
  }

    const validateLastName = (e) => {
      const lastName = e.target.value
      setLastName(lastName)
    }


       const validatePhone = (e) => {
         const phone = e.target.value
         setPhone(phone)
       }

  const validatePassword = (e) => {
    const password = e.target.value
    setPassword(password)
    if (!passRegex.test(password)) {
      setValidPassword(false)
    } else {
      setValidPassword(true)
      if (password === repeatPassword) {
        setValidRepeatPassword(true)
      } else {
        setValidRepeatPassword(false)
      }
    }
  }
  const validateRepeatPassword = (e) => {
    const repeatPassword = e.target.value
    setRepeatPassword(repeatPassword)
    if (password === repeatPassword) {
      setValidRepeatPassword(true)
      setValidPassword(true)
    } else {
      setValidRepeatPassword(false)
      setValidPassword(false)
    }
  }

  const validateEmail = (e) => {
    const email = e.target.value
    setEmail(email)
    if (!emailRegex.test(email)) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const formValidate = (e) => {
    e.preventDefault()
    if (
      valid !== true ||
      validPassword !== true ||
      validRepeatPassword !== true
    ) {
      return alert('Verify the fields')
    } else {
      return alert('your connect')
    }
  }

  const handleClick = () => {
    setIsPassVisible(!isPassvisible)
  }

  const signUp = async () => {
    user.map((u) => {
      if (email === u.email) {
        alert('This email is alredy used')
      }
    })

    if (valid !== true) {
      alert('verify your email')
    } else if (validPassword !== true) {
      alert('verify your password')
    } else {
      await signup(name,lastName,phone, email, password)
      if (!localStorage.getItem('token')) alert('Error')
      else navigate('/')
    }
  }

  return (
    <>
      <div className="signup-container">
        <Card id="card-signup" onSubmit={formValidate}>
          <Typography variant="h4">Signup</Typography>
          <CardContent id="content-input-signup">
            <TextField
              value={name}
              id="input-signup"
              label="Name"
              onChange={validateName}
              variant="filled"
            />
            <TextField
              id="input-signup"
              label="Last name"
              value={lastName}
              onChange={validateLastName}
              variant="filled"
            />
            <TextField
              id="input-signup"
              label="phone"
              value={phone}
              onChange={validatePhone}
              variant="filled"
            />
            <TextField
              id="input-signup"
              label="email"
              color={valid ? 'info' : 'error'}
              value={email}
              onChange={validateEmail}
              variant="filled"
            />
            <TextField
              id="input-signup"
              label="Password"
              variant="filled"
              onChange={validatePassword}
              type={isPassvisible ? 'text' : 'password'}
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
                      {isPassvisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </div>
                ),
              }}
            />
            <TextField
              id="input-signup"
              value={repeatPassword}
              type={isPassvisible ? 'text' : 'password'}
              color={validRepeatPassword ? 'info' : 'error'}
              onChange={validateRepeatPassword}
              label="Repeat Password"
              variant="filled"
            />
          </CardContent>

          <CardActions id="content-footer-signup">
            <Button id="signup-button" variant="contained" onClick={signUp}>
              <Typography color="#000" variant="button">
                Create Account
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
                to="/login"
              >
                Login
              </Link>
            </Typography>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Signup
