import CartWidget from "./CartWidget";
import Logo from "../assets/logo.png";
import style from "./NavBar.module.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";

const NavBar = () => {
  return (
    <nav className={style.navBar}>
      <img className={style.logo} src={Logo} alt="logo" />
      <ul className={style.navLinks}>
        <li><NavLink to="/" className={style.links} href="#">Inicio</NavLink></li>
        <li><NavLink to="/hombres" className={style.links} href="#">Hombres</NavLink></li>
        <li><NavLink to="/mujeres" className={style.links} href="#">Mujeres</NavLink></li>
        <li><NavLink to="/niños" className={style.links} href="#">Niños</NavLink></li>
        <li><NavLink to="/contacto" className={style.links} href="#">Contacto</NavLink></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
