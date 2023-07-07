import {AiOutlineInfoCircle, AiOutlineUnorderedList } from "react-icons/ai"
import { CgProfile } from "react-icons/cg"
import { MdExpandMore, MdTopic } from "react-icons/md"; 
import { BsFillBookmarkStarFill, BsCircle } from "react-icons/bs"; 

export default [
    {
        id:1,
        icon: <CgProfile className="icon" />,
        name: "Profile"
    },
    {
        id:2,
        icon: <AiOutlineUnorderedList className="icon" />,
        name: "List"
    },
    {
        id:3,
        icon: <MdTopic className="icon" />,
        name: "Topic"
    },
    {
        id:4,
        icon: <BsFillBookmarkStarFill className="icon" />,
        name: "Bookmarks"
    },
    {
        id:5,
        icon: <BsCircle className="icon" />,
        name: "Circle"
    }
]