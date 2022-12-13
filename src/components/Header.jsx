import { Link } from "react-router-dom";


function Header({ text="Todo App" }) {
  const headerStyle = {
    backgroundColor: "#F4EAD5",
    color: "#CCD6A6",
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2><Link className="link-routes" to='/'>{text}</Link> <Link className="link-routes" style={{"margin-left": "40px"}}  to='/about'>About</Link></h2>
        
      </div>
    </header>
  );
}

export default Header;
