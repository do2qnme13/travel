/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./card.scss";
import { HiOutlineClipboard, HiOutlineLocationMarker } from "react-icons/hi";
const Card = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in-down" key={data.id} className="singleDestination">
      <div className="imgDiv">
        <img src={data.imgSrc} alt={data.desTitle} />
      </div>
      <div className="cardInfo flex">
        <h4 className="destTitle">{data.desTitle}</h4>
        <span className="continent flex">
          <HiOutlineLocationMarker className="icon" />
          <div className="name">{data.location}</div>
        </span>

        <div className="fees flex">
          <div className="grade">
            <span>
              {data.grade}
              <small>+1</small>
            </span>
          </div>
          <div className="price">
            <h5>{data.fees}</h5>
          </div>
        </div>

        <div className="desc">
          <p>{data.description}</p>
        </div>

        <button className="btn flex">
          DETAILS
          <HiOutlineClipboard className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
