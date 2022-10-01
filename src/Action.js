import React from "react";
import Card from "./Card";
import topGun from "./action/topGun.jpg";
import avatar from "./action/avatar.jpg";
import logan from "./action/logan.jpg";
import fallout from "./action/fallout.jpg";

const Action =()=>{
    return (
        <div>
            <Card image={topGun} movieName="TOP GUN: MAVERICK (2022)" director="Joseph Kosinski" imdbRating="8.4/10"/>
            <Card image={avatar} movieName="AVATAR (2009)" director="James Cameron" imdbRating="7.8/10"/>
            <Card image={logan} movieName="LOGAN (2017)" director="James Mangold" imdbRating="8.1/10"/>
            <Card image={fallout} movieName="Mission: Impossible - Fallout (2018)" director="Christopher McQuarrie" imdbRating="7.7/10"/>

        </div>
    );
}
export default Action;