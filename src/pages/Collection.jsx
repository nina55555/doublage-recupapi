import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Link, NavLink, useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../css/Cards.css";
import "../css/Collection.css";

import ReactPlayer from "react-player";
import videoShow from "../assets/videoDefile.mp4";


const Collection = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useQuery("model", () => {
    return axios.get(" http://localhost:5978/defilons/");
  });


  return(
    <div className="caroussel">
      <div className="list">
        {/*mapper ici la list */}
        <div className="item">
          <img src="src/assets/Capturelogo.PNG" alt="photo1" />
          <div className="content">
            <div className="title">title1</div>
            <div className="descr">descr1</div>
          
            <div className="button">
            <button>see more</button>
            </div>

          </div>
        </div>

        <div className="item">
          <img src="src/assets/wallpaint.jpg" alt="photo2" />
          <div className="content">
            <div className="title">title2</div>
            <div className="descr">descr2</div>
          
            <div className="button">
            <button>see more</button>
            </div>

          </div>
        </div>

        <div className="item">
          <img src="src/assets/pic-br.jpg" alt="photo3" />
          <div className="content">
            <div className="title">title3</div>
            <div className="descr">descr3</div>
            
            <div className="button">
            <button>see more</button>
            </div>

          </div>
        </div>

      </div>


      <div className="thumbnail">

        <div className="item">
          <img src="src/assets/Capturelogo.PNG" alt="" />
          <div className="content">
            <div className="title">name slider</div>
            <div className="descr">Description</div>
          </div>
        </div>

        <div className="item">
          <img src="src/assets/wallpaint.jpg" alt="" />
          <div className="content">
            <div className="title">name slider</div>
            <div className="descr">Description</div>
          </div>
        </div>

        <div className="item">
          <img src="src/assets/pic-br.jpg" alt="" />
          <div className="content">
            <div className="title">name slider</div>
            <div className="descr">Description</div>
          </div>
        </div>

      </div>



    </div>
  )



};
export default Collection;