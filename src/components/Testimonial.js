import React from 'react'
import Ellipse1 from "./Assets/Images/Ellipse 1.png"
import Ellipse2 from "./Assets/Images/Ellipse 2.png"
import Ellipse3 from "./Assets/Images/Ellipse 3.png"

const Testimonial = () => {
    const cardData = [
        {
            id: 0,
          quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
          name: 'Jane Mackford',
          role: 'VP of company',
          src: Ellipse1
        },
        {   
            id: 1,
            quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
            name: 'Samuel Ola',
            role: 'VP of company',
            src: Ellipse2
          },
          { 
            id: 2,
            quote: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
            name: 'Marian Milfred',
            role: 'VP of company',
            src: Ellipse3
          },
        
      ];

  return (
    <div className='testimonial'>
        <div className='title-box'>
            <h1> Our Testimonial</h1>
            <h2>Our Testimonial</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse<br></br> tincidunt sagittis eros. Quisque quis euismod lorem.</p>
        <div className='cards'>
      {cardData.map((data) => (
        <div className='card' key={data.id}>
          <div className='card-text'>
            <p>“{data.quote}”</p>
          </div>

          <div className='card-info'>
            <img src={data.src} className='' alt='' />
            <div>
              <h3>{data.name}</h3>
              <p>{data.role}</p>
            </div>
          </div>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Testimonial