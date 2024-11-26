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


import images1 from"../assets/images1.jpg";
import images2 from"../assets/images2.jpg";
import images3 from"../assets/images3.jpg";



const Collection = () => {



/*

  let nextDom = document.getElementById('next');
  let prevDom = document.getElementById('prev');
  let carousselDom = document.querySelector('.caroussel');
  let listItemDom = document.querySelector('.caroussel .list');
  let thumbnailDom = document.querySelector('.caroussel .thumbnail');



  nextDom.onclick = function (){
    showSlider('next');
  }

  function showSlider(type){
    let itemSlider = document.querySelectorAll('.caroussel .list .item')
    let itemThumbnail = document.querySelectorAll('.caroussel .thumbnail .item')
  }

  if (type === 'next'){
    listItemDom.appendChild(itemSlider[0] );
  }

*/



/*


  const { id } = useParams();
  const { data, isError, isLoading } = useQuery("model", () => {
    return axios.get(" http://localhost:5978/defilons/");
  });


*/


const items = useState(1);



const { data, isError, isLoading } = useQuery("model", () => {
  //return axios.get ('http://localhost:3002/collection-test/');
  //return axios.get (' http://localhost:5979/runways/');
  return axios.get(" http://localhost:5978/defilons/");
});


/*

[
  {
    name: "clothe1",
    descr: "description",
    image: "../src/assets/images1.jpg"
  },

  {
    name: "clothe2",
    descr: "description",
    image: {images2}
  },
  {
    name: "clothe3",
    descr: "description",
    image: {images3}
  }
]
*/


const handleprev = () => {
  setItems((prevItems) => [...prevItems.length -1 , prevItems.slice(1) ] )
};



const handlenext = () => {
  setItems((prevItems) => [...prevItems.slice(1), prevItems[0] ] )
};



  return(
    
    <div className="container">
      <div className="slide">
        
       
          
        

      {data?.data.map((product) => {
          
       
        return (

          <>

            <div className="big-defile" key={product._id}>
              {/*{`/product/${product._id} `}*/}
              

              <img src={product.imageUrl} />

              


              <div className="arrows">
              <button onClick={handleprev}  className="prev">prev</button>
              <button onClick={handlenext}  className="next">next</button>
              </div> 
              
                  <div className="thumbnail">

                    
{data?.data.map((product) => {
  return(

  
                        <div className="card" key={product._id}>

                                            

                      <img src={product.imageUrl} className=" changing-class active" />
      {/* 
                    <NavLink to={`/product/${product._id} `}>buy now</NavLink>
      */}
                      <NavLink to={`/collectionShow/${product._id} `}>{/*buy now  */}{product.title} </NavLink>
      {/*
                      <NavLink to="Home">buy now</NavLink>
      */}
      
                  
                    </div>
     )
      })}  
{/*


                      <div className="item">
                        <img src="src/assets/Capture-marbre2.PNG" alt="2nd" />
                        <div className="content">
                          <div className="title">name slider</div>
                          <div className="descr">Description</div>
                        </div>
                      </div>

                      <div className="item">
                        <img src="src/assets/pic-br.jpg" alt="3rd" />
                        <div className="content">
                          <div className="title">name slider</div>
                          <div className="descr">Description</div>
                        </div>
                      </div>

                      <div className="item">
                        <img src="src/assets/wallpaint.jpg" alt="1st" />
                        <div className="content">
                          <div className="title">name slider</div>
                          <div className="descr">Description</div>
                        </div>
                      </div>

*/}




                 

          </div>

              {/* <--mettre ici toutes url de defilé */}
            </div>


          </>
        );
        
          
        }
        

        )}


      
      

      <div className="time"></div>
      {/* 
        {
          items.map((item, index) => (
            
            <div  key= {index} className="item">
              <div className="content">
                <h2 className="name">{item.name} </h2>
                <p className="image">{item.image} </p>
                <button>see more</button>
              </div>
            </div>
           ) )
        }
      */}

      </div>
    </div>
    


  )



};
export default Collection;