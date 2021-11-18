import React from "react";
import { NavLink } from "react-router-dom";

const Results = ({data}) => {
    console.log(data);
    return <div> {/* it shows null - coz data has not arrived yet - therefore use ampersand &&*/}
        {data.map(d => ( /* vs code works with parenthsis - not curly braces */
            <div className="" key={d._id}>
                <h2><NavLink to={{pathname:`/details/${d._id}`,name:d.name}}>{d.name}</NavLink></h2>
            </div>
        ))}
    </div>
}

export default Results;