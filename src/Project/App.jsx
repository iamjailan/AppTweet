import React from "react";
import "./component/index.css";
import Sidebar from "./component/sidebar";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"
import PostPage from "./component/postPage";
import LeftPage from "./component/aboutUs";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

export default function App() {
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleMode(){
        setDarkMode(prevMode => !prevMode)
    }
    return <main className={darkMode ? "dark" : "light"}>
        <div>
            <BiMenu className="icon--menu" />
            <Sidebar />
            <PostPage />
            <LeftPage />
        </div>
        <button onClick={() => toggleMode()} className="dark-light-btn">{darkMode ? <MdOutlineLightMode className="icon" /> : <MdOutlineDarkMode className="icon" />}</button>
    </main>
}