import "./footer.scss";
import footer from "../../img/footer.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={footer} loop autoPlay muted type="vide/mp4"></video>
      </div>

      <div data-aos="fade-up" className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              Send
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              reiciendis itaque sit tenetur mollitia quam minus deleniti
              sapiente velit placeat harum, eveniet ex, beatae hic cupiditate
              veniam doloribus ipsa explicabo?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FiFacebook className="icon" />
              <AiOutlineInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div data-aos="fade-up" className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
            </div>
            {/* Group Two */}
            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
            </div>
            {/* Group Three */}
            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Califonia
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Paris
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tokoyo
              </li>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
