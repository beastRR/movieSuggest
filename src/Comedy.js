import React from "react";
import Card from "./Card";
import free from "./comedy/freeGuy.jpg";
import deadpool from "./comedy/deadpool.jpeg";
import herapheri from "./comedy/herapheri.jpg";
import bhool from "./comedy/bhool.jpg";


const Comedy =()=>{
    return (
        <div>
            <Card image={free} movieName="FREE GUY (2021)" director="Shawn Levy" imdbRating="7.1/10"/>
            <Card image={deadpool} movieName="DEADPOOL (2016)" director="Tim Miller" imdbRating="8/10"/>
            <Card image={herapheri} movieName="HERA PHERI (2000)" director=" Priyadarshan" imdbRating="10/10"/>
            <Card image={bhool} movieName="BHOOL BHULAIYAA" director="Priyadarshan" imdbRating="7.4/10"/>
            
        </div>
    );
}
export default Comedy;