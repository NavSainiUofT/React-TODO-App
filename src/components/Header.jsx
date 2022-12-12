function Header({ text }) {
  const headerStyle = {
    backgroundColor: "#F4EAD5",
    color: "#CCD6A6",
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

export default Header;
