import "./featured.css"
import delhi from "./delhi.jpg"
import Bangalore from "./bg.png"
import mumbai from "./mumbai.jpg"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src={delhi} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h2>123 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={Bangalore} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Bangalore</h1>
                <h2>423 Properties</h2>
            </div>
        </div>

        <div className="featuredItem">
            <img src={mumbai} alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>430 Properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured