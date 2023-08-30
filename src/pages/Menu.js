import { Link } from "react-router-dom"
import { AiFillFolderOpen, AiFillGithub, AiFillTool, AiOutlineHome } from "react-icons/ai";

function Menu() {
    return(
        <div className="Menu">
            <div className="Menu-1">
                <h1>
                    <Link to="/">
                        PORTFOLIO
                    </Link>
                </h1>
            </div>
            <div className="Menu-2">
                <Link to="/">
                    <AiOutlineHome/>
                </Link> 
                <Link to="/skills">
                    <AiFillTool/>
                </Link> 
                <Link to="/projects">
                    <AiFillFolderOpen/>
                </Link>
                <Link to="https://github.com/Wjyeop">
                    <AiFillGithub/>
                </Link>
            </div>
        </div>
    )
}

export default Menu;
