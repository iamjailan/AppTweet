import React from "react";
import Post from "./post";
import postData from "./postData";
import {GiHamburgerMenu} from "react-icons/gi"

const PostPage = () => {
    const postEl = postData.map(item => {
        return <Post 
            key={item.id}
            {...item}
        />
    })
    return (
    <section className="post--page">
        <div className="search--page">
            <div>
            <input type="text" className="search--input" placeholder="Search"/>
            <button className="search--btn">Search</button>
            </div>
        </div>
        {postEl}
    </section>
    )
}

export default PostPage