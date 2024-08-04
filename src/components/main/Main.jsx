import "./main.scss";
import img from "../../img/t1.jpg";
import swz from "../../img/swz.jpg";
import gc from "../../img/gc.jpg";
import osk from "../../img/osk.jpg";
import sel from "../../img/sel.jpg";
import prs from "../../img/prs.jpg";
import bcl from "../../img/bcl.jpg";
import hno from "../../img/hno.jpg";
import ldn from "../../img/ldn.jpg";
import Card from "../card/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const datas = [
  {
    id: 1,
    imgSrc: img,
    desTitle: "Patayya",
    location: "Thailand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Thailand is a country in Southeast Asia known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
  {
    id: 2,
    imgSrc: swz,
    desTitle: "Geneva",
    location: "Switzerland",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Geneva is a country in Switzerland  known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
  {
    id: 3,
    imgSrc: gc,
    desTitle: "Paros",
    location: "Greece",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Paros is a country in Greece  known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
  {
    id: 4,
    imgSrc: osk,
    desTitle: "Oosaka",
    location: "Japan",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Oosaka is a country in Japan  known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
  {
    id: 5,
    imgSrc: sel,
    desTitle: "Seoul",
    location: "Sout Korea",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Seoul is a city in south korea  known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
  {
    id: 6,
    imgSrc: prs,
    desTitle: "Paris",
    location: "France",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "France is a country in Europe known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
  {
    id: 7,
    imgSrc: bcl,
    desTitle: "Barcelona",
    location: "spain",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Barcelona is a country in Europe known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },

  {
    id: 8,
    imgSrc: hno,
    desTitle: "Ha Noi",
    location: "Vietnam",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Vietnam is a country in Southeast Asia known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },

  {
    id: 9,
    imgSrc: ldn,
    desTitle: "London",
    location: "England",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "England is a country in Europe known for its rich culture, delicious foods and amazing views and famous tourist visits spots.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {datas.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </div>
    </section>
  );
};

export default Main;
