import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import { FaHandPointLeft,FaHandPointRight} from 'react-icons/fa';
import aPropos from "../image/a-propos-de-moi.png"
import projet from "../image/MesProjets.png"
import maitrises from "../image/mesMaitrises.png"
import { Link } from 'react-router-dom'

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };
 
  slides = [
    {
      key: uuidv4(),
      content: <Link to={`/about`}><img src={aPropos} alt="1" /></Link>
    },
    {
      key: uuidv4(),
      content: <Link to={`/project`}><img src={projet} alt="2" /></Link>

    },
    {
      key: uuidv4(),
      content: <Link to={`/maitrises`}><img src={maitrises} alt="3" /></Link>
    }
  ];

  render() {
    return (
      <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <div>
            <FaHandPointLeft size={50}
              className="forwardandbackicons"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide - 1 });
              }}
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <FaHandPointRight size={50}
              className="forwardandbackicons"
              onClick={() => {
                this.setState({ goToSlide: this.state.goToSlide + 1 });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
