import Logo from "./Assets/Images/Logo (7).png"
import Logo1 from "./Assets/Images/Logo (1).png"
import Logo2 from "./Assets/Images/Logo (2).png"
import Logo3 from "./Assets/Images/Logo (3).png"
import Logo4 from "./Assets/Images/Logo (4).png"
import Logo5 from "./Assets/Images/Logo (5).png"

export default function Client(){
    const clientLogos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5]
    return(
        <div className="client-container">
        <div className="client-header">
            <div className="title-box">
                <h1 className="title">Our Clients</h1>
                <h2> Our Clients</h2>
            </div>
        </div>
        <div className="client-logos">
          {clientLogos.map((logo, index) => (
            <img src={logo} key={index} className="client-logo" alt={`Logo ${index + 1}`} />
          ))}
        </div>
      </div>
    )
}