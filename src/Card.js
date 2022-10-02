import React from "react";
import "./App.css";
import getOut from "./thriller/getOut.jpg";
const Card =({
    image=getOut,
    movieName="Get Out",
    director="Jordan Peele",
    imdbRating= "7.7/10"
})=>{
    return(
        <div className="parentCard mt-2">
            <div className="card">
                <div className="row">
                    <div className="col-7  mb-3">
                    <img src={image} alt="" width="250" height="280"/>
                    </div>

                    <div className="col-5 mt-3">
                        <h3>{movieName}</h3>
                        <h4 className="mx-1">{director}</h4>
                        <br/>
                        <p style={{width:135}} className="imdb"><b className=""><span className="text-">IMDb </span> {imdbRating}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
