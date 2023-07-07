import React from "react";
import { AiOutlineHeart,AiOutlineInfoCircle, AiTwotoneHeart  } from "react-icons/ai"
import { LiaShareSolid } from "react-icons/lia"
import { FaRegComment } from "react-icons/fa"
import { CiSaveDown1 } from "react-icons/ci"

const Post = ({image, name, username, time, timeType, postText}) => {
    const [like, setLike] = React.useState(false);

    const toggleLike = () => {
        setLike(prevLike => !prevLike)
    }
    return (
        <main className="post">
            <div className="post--profile">
                <img className="post--image" src={image}/>
            </div>
            <div className="post--details">
                <div className="post--info">
                    <div className="info--mini">
                        <h2 className="post--name">{name}</h2>
                        <p className="username">@{username} • {time}{timeType}</p>
                    </div>
                    <AiOutlineInfoCircle className="icon" />
                </div>
                <div className="post--text">
                    <p>{postText}
                    </p>
                </div>
                <div className="post--icons">
                    <CiSaveDown1 className="icon" />
                    <LiaShareSolid className="icon" />
                    <FaRegComment className="icon" />
                    {like ? <AiTwotoneHeart onClick={() => toggleLike()} className="icon" /> : <AiOutlineHeart onClick={() => toggleLike()} className="icon" />}
                </div>
            </div>
        </main>
    )
}

export default Post