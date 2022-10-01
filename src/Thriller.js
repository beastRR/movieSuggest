import React from "react";
import Card from "./Card";
import oxygen from "./thriller/oxygen.jpg";
import orphan from "./thriller/orphan.jpg";
import old from "./thriller/old.jpg";
import fall from "./thriller/Fall.jpg";



const Thriller =()=>{
    return (
        <div>
            <Card/>
            <Card image={oxygen} movieName="OXYGEN" director="Alexandre Aja" imdbRating="6.5/10"/>
            <Card image={orphan} movieName="ORPHAN" director="Jaume Collet-Serra" imdbRating="7/10"/>
            <Card image={old} movieName="OLD" director="M. Night Shyamalan" imdbRating="5.8/10"/>
            <Card image={fall} movieName="FALL" director="Scott Mann" imdbRating="6.4/10"/>
        </div>

    );
}
export default Thriller;