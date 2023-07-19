import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'
import ArchiveIcon from '@mui/icons-material/Archive'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material'

import imgAvatar from '../../assets/images.png'
import { useNavigate } from 'react-router-dom'


const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function MenuHeader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {

      setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
      setAnchorElNav(null)
    }

    const handleCloseUserMenu = (setting) => {
      console.log(setting)
            if (setting === 'Logout'){
              logout()
            }
             setAnchorElUser(null)
    }

      const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
      }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src={imgAvatar} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
