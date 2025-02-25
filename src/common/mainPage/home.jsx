import React from 'react'
import Catigories from './catigories'
import Slider from './slider'



const Home = () => {
  return (
    <div>
      <section className='home'>
        <div className='cointainer-d-flex'>
            <Catigories/>
            <Slider/>
            

        </div>
      </section>
    </div>
  )
}

export default Home
