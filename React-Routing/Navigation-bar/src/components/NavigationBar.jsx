import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar-container">
      <button onClick={() => handleNavigation("/")}>Home</button>
      <button onClick={() => handleNavigation("/about")}>About</button>
      <button onClick={() => handleNavigation("/products")}>Products</button>
      <button onClick={() => handleNavigation("/contact")}>Contact</button>
    </nav>
  );
};

export default NavigationBar;
