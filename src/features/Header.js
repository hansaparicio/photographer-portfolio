import logo from "../logo.svg";

export const Header = () => (<>
  <div className="header">
    <img className="header-logo" src={logo}/>
    <span className="header-title">Mayank Patel</span>
  </div>
  <hr className="header-separator"/>
</>);
