import React from "react";
import {AiOutlineInfoCircle } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { MdExpandMore } from "react-icons/md";
import data from "./data";
import EachMenu from "./eachMenu";

const Sidebar = () => {
    const navbarEl = data.map(item => {
        return <EachMenu 
            key={item.id}
            {...item}
        />
    })
    return <nav className="navbar">

    {/* Profile Part */}

        <header className="navbar--header">
            <div className="navbar--image">
                <img src="images/item-6.jpeg" />
                <AiOutlineInfoCircle className="icon" />
            </div>
            <div className="navbar--name">
                <h2>Jailan Mirkhel</h2>
                <p>@iamjailan</p>
            </div>
            <div className="statue">
                <p>187 <span className="span">Following</span></p>
                <p>60 <span className="span">Followers</span></p>
            </div>
            
        </header>

        {/* Menu Part */}

        {navbarEl}

        {/* Footer Part */}

        <footer className="navbar--footer">
            <div className="footer--item">
            <h4>Professional Tools</h4>
            <MdExpandMore className="icon" />
            </div>
            <div className="footer--item">
            <h4>Settings & Help</h4>
            <MdExpandMore className="icon" />
            </div>
        </footer>
    </nav>
}

export default Sidebar