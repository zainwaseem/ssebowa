import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./TeamSlider.css";
import teamemb1 from "../../assets/teammember1.png";
import teamemb2 from "../../assets/teammember2.png";
import teamemb3 from "../../assets/teammember3.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 3 },
];

let ourTeamInfo = [
  {
    url: teamemb1,
    name: `zain waseem`,
    Positon: `Co Founder`,
    job: `Designer`,
  },
  {
    url: teamemb2,
    name: `zain waseem`,
    Positon: `Founder`,
    job: `Developer`,
  },
  {
    url: teamemb3,
    name: `zain waseem`,
    Positon: `Developer`,
    job: `Founder`,
  },
  {
    url: teamemb1,

    name: `zain waseem`,
    Positon: `Founder`,
    job: `Developer`,
  },
  {
    url: teamemb2,
    name: `zain waseem`,
    Positon: `Co Founder`,
    job: `Developer`,
  },
];
function TeamSlider() {
  const [items] = useState(ourTeamInfo);

  return (
    <div className="App">
      <div className="controls-wrapper"></div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>
              <div className="mainslider">
                <img
                  src={item.url}
                  className="zain"
                  width="200px"
                  height="150"
                  alt=""
                />
              </div>
              <div className="TeamData">
                <h5 className="title">{item.name}</h5>
                <h6 className="title">{item.Positon}</h6>
                <small>{item.job}</small>
              </div>
            </Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TeamSlider;
