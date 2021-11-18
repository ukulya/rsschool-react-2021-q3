import React from "react";

const Results = ({data}) => {
    console.log(data);
    return <div> {/* it shows null - coz data has not arrived yet - therefore use ampersand &&*/}
        {data.map(d => ( /* vs code works with parenthsis - not curly braces */
            <div className="" key={d._id}>
                <h2>{d.name}</h2>
            </div>
        ))}
    </div>
}

export default Results;