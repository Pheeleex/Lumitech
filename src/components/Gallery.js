import portfolio1 from "./Assets/Images/Burger.png"
import portfolio2 from "./Assets/Images/Rice.png"
import portfolio3 from "./Assets/Images/screens.png"
import portfolio4 from "./Assets/Images/sneakers.png"
import portfolio5 from "./Assets/Images/screens2.png"
import portfolio6 from "./Assets/Images/Screens3.png"
import portfolio7 from "./Assets/Images/coffee.png"
import portfolio8 from "./Assets/Images/woman.png"
import portfolio9 from "./Assets/Images/Speakers.png"

const Gallery = () => {
  const portfolios = [portfolio1, portfolio2, portfolio3, portfolio4,
        portfolio5, portfolio6, portfolio7,
        portfolio8, portfolio9
]
    return (
      <div className="gallery-container">
       <div className="title-box">
                <h1 className="title">Gallery Section</h1>
                <h2> Gallery Section</h2>
            </div>
            <div className="container">
      <div className="column">
        <div className="text-box">Welcome to the heart of my creative journey—a curated gallery<br></br> showcasing a collection of my finest<br></br> work, each piece a testamenta, to my<br></br> passion for artistry and dedication to excellence. As you explore this <br></br> diverse assortment, you'll witness <br></br> the fusion of creativity, technique<br></br> and emotion that defines my artistic vision.
        <div className="button started">Get Started</div>
        </div>
        {portfolios.slice(0, 3).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
      <div className="column">
        {portfolios.slice(3, 7).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 4}`} />
        ))}
      </div>
      <div className="column">
        {portfolios.slice(7).map((image, index) => (
          <img key={index} src={image} className="increase" alt={`Image ${index + 8}`} />
        ))}
      </div>
    </div>
      </div>
    );
  };
  
  export default Gallery;