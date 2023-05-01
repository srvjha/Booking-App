import "./featuredProp.css";
import d from "./d.webp"
import b from "./b.webp"
import m from "./m.webp"
import h from "./h.webp"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={d}
          alt=""
          className="fpImg"
        />
        <span className="fpName">ibis New Delhi Aerocity</span>
        <span className="fpCity">South West, New Delhi</span>
        <span className="fpPrice">Starting from ₹ 7,299</span>
        <div className="fpRating">
          <button>8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={b}
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Oberoi Bengaluru</span>
        <span className="fpCity">MG Road, Bangalore</span>
        <span className="fpPrice">Starting from ₹ 15,000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Wonderfull</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={m}
          className="fpImg"
        />
        <span className="fpName">Hotel Hilton Suites</span>
        <span className="fpCity">Western Suburbs, Mumbai</span>
        <span className="fpPrice">Starting from ₹ 2,499</span>
        <div className="fpRating">
          <button>9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={h}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Deccan</span>
        <span className="fpCity">Hyderabad</span>
        <span className="fpPrice">Starting from ₹ 7,990</span>
        <div className="fpRating">
          <button>8.2</button>
          <span>Very Good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;