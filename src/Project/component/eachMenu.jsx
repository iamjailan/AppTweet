import React from "react";
import { CgProfile } from "react-icons/cg"

const EachMenu = ({name, icon, id}) => {
    return  (
    <div className="navbar--middle">
        <div className="middle--item">
            <div>{icon}</div>
            <h3>{name}</h3>
        </div>
    </div>
)
}

export default EachMenu