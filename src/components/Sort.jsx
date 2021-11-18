import React from "react";

const Sort = ({sortByNameDESC,sortByNameASC}) => {
    return <div>
        <button onClick={sortByNameDESC}>Sort z-a</button>
        <button onClick={sortByNameASC}>Sort a-z</button>
    </div>
}

export default Sort;