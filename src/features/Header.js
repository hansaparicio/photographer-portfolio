export const Header = ({photographerName, logo}) => (<>
  <div className="header">
    <img className="header-logo" src={logo} alt="logo"/>
    <span className="header-title">{photographerName}</span>
  </div>
  <hr className="header-separator"/>
</>);
