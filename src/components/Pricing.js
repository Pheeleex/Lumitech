import React from 'react'
import Laptop from  "./Assets/Images/Laptop.png"
import Laptop1 from  "./Assets/Images/Laptop1 (1).png"
import Laptop2 from  "./Assets/Images/Laptop2.png"
export const Pricing = () => {
  const pricingData = [
    {id: 0, src:Laptop, service: "Web Development", name: "Sunday O."},
    {id: 1, src:Laptop1, service: "UI/UX Design", name: "Samuel Olarenwaju"},
    {id: 2, src:Laptop2, service: "Training/Coaching", name: "Frenk Mailing"}
  ]
  return (
    <div className="pricing">
        <div className='title-box'>
            <h1>Our Pricing</h1>
            <h2>Our Pricing </h2>
        </div>
        <div className='pricing-container'>
          {pricingData.map((data) => (
            <div key = {data.id} className='about-price'>
                <img src={data.src} />
                <div className='about'>
                    <div className='service'>
                        <h3>{data.service}</h3>
                        <p className='bold'> $723,99 </p>
                    </div>

                    <div className='more-about'>
                  <div className='duration'>
                      <p className='bold'> 2 weeks </p>
                      <p> Project Duration </p>
                  </div>

                  <div className='manager'>
                      <p className='bold'> {data.name} </p>
                      <p> Project Manager </p>
                  </div>

                  <div className='research'>
                      <p className='bold'> In-depth Research </p>
                      <p> Project Process </p>
                  </div>
              </div>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}
