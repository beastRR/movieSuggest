import React from "react";
import conjuring from "./horror/conjuring.jpg";
import it from "./horror/it.jpg";
import annabelle from "./horror/annabelle.jpg";
import escape from "./horror/escape.jpg";
import Card from "./Card";


const Horror =()=>{
    return (
        <div>
            <Card image={conjuring} movieName="CONJURING (2013)" director="James Wan" imdbRating="7.5/10"/>
            <Card image={it} movieName="IT (2017)" director="Andrés Muschietti" imdbRating="7.3/10"/>
            <Card image={annabelle} movieName="ANNABELLE (2017)" director="David F. Sandberg" imdbRating="6.5/10"/>
            <Card image={escape} movieName="ESCAPE ROOM (2019)" director="Adam Robitel" imdbRating="6.4/10"/>
            <Card/>
        </div>
    );
}
export default Horror;