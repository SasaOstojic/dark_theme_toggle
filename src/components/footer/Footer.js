import React from 'react'
import './Footer.css'

const Footer = ({myTheme}) => {
  return (
    <footer className='--text-center' data-theme={myTheme}>
      <p>Copyright &copy; 2022</p>
    </footer>
  )
}

export default Footer