import Sphere from "./Assets/Images/Specular.png"
import Rectangle from "./Assets/Images/group.png"


export default function Hero(){
    return(
        <div className="H">
                  <div className="Hero">
            <div className="Hero-container">
                <h1>Title Copy Goes Here Be awesome</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <div className="button started">Get Started</div>
            </div>
            <div className="image-container">
                <img src={Rectangle} className="" alt="" />
            </div>
       </div>
       <div className="spherical">
                <img src={Sphere} className="sphere" alt="" />
            </div>
        </div>
    )
}