import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/imgs/se.png";


const Layout = () => {

  return(
    <>
      <nav className="navBarClass" id="navBarId">
        <Link to="/" id="siteLogoWraperId"><img id="siteLogoId" src={logo} alt="Logo" /></Link>
          <ul id="navBarListId">
            <CustomLink className="navClickClass" id="homeBtnId" to="/"><div id="homeMenuTextId" className="navTextClass">Home</div></CustomLink>
            <CustomLink className="navClickClass" id="projectBtnId" to="/project"><div id="projectMenuTextId" className="navTextClass">Projects</div></CustomLink>
            <CustomLink className="navClickClass" id="aboutBtnId" to="/about"><div id="aboutMenuTextId" className="navTextClass">About</div></CustomLink>
            <CustomLink className="navClickClass" id="contactBtnId" to="/contact"><div id="contactMenuTextId" className="navTextClass">Contact</div></CustomLink>
            <CustomLink className="navClickClass" id="aboutBtnId" to="/info"><div id="infoMenuTextId" className="navTextClass">Info</div></CustomLink>
          </ul>
        </nav>
      </>
    )
}


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
  return (
    <li className={isActive ? "active" : "BtnOff"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
    )
  }

export default Layout;