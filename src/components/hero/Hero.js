import React from 'react'
import './Hero.css'
import image from '../../assets/phone.svg'

const Hero = ({myTheme}) => {
  return (
    <section className='hero' data-theme={myTheme}>
      <div className='container --grid-15'>
        <div className='hero-text'>
          <h1>Sasa eShop Landing Page</h1>
          <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim</p>
          <div className='--flex-start'>
            <button className='--btn btn-p'>Learn more</button>
            <button className='--btn --btn-danger'>Sign Up</button>
          </div>
        </div>
        <div className='--text-center'>
          <img src={image} alt='phone' width={200}/>
        </div>
      </div>
    </section>
  )
}

export default Hero