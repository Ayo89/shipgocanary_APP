import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material'
import './index.css'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const useRoboto = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={useRoboto}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
