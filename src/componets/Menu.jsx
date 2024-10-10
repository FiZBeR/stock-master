import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../assets/home.svg'
import team from '../assets/administración.svg'
import calendar from '../assets/calendario.svg'
import productos from '../assets/carrorápido.svg'
import crear from '../assets/añadir.svg'
import ventas from '../assets/recibo.svg'
import salida from '../assets/salida.svg'
import logo from '../assets/logo.svg'


export const Menu = () => {
  return (
    <div className='menu'>
      <div className='menuPartOne'>
        <img src={logo}/>
      </div>
      <nav className='menuPartTwo'>
        <li className='menuItem'>
          <img src={home}/>
          <NavLink>Inicio</NavLink>
        </li >
        <li className='menuItem'>
          <img src={team}/>
          <NavLink>Equipo</NavLink>
        </li>
        <li className='menuItem'>
          <img src={calendar}/>
          <NavLink>Calendario</NavLink>
        </li>
        <li className='menuItem'>
          <img src={productos}/>
          <NavLink>Productos</NavLink>
        </li>
        <li className='menuItem'>
          <img src={crear}/>
          <NavLink>Crear</NavLink>
        </li>
        <li className='menuItem'>
          <img src={ventas}/>
          <NavLink>Más Vendidos</NavLink>
        </li>
      </nav>

      <div className='menuPartThree'>
          <img src={salida}/>
          <NavLink>Logout</NavLink>
      </div>
    </div>
  )
}
