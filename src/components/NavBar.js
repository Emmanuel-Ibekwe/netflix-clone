import classes from "./NavBar.module.css";
import profileAvatar from "../assets/profile-avatar.png";
import { useEffect, useState } from "react";

function NavBar() {
  const [show, handleShow] = useState(false);

  const navBarScrollHandler = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarScrollHandler);

    return () => {
      window.removeEventListener("scroll", navBarScrollHandler);
    };
  }, []);

  return (
    <div className={`${classes.nav} ${show && classes["nav-black"]}`}>
      <img
        className={classes["nav-logo"]}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <img
        className={classes["nav-avatar"]}
        src={profileAvatar}
        alt="Profile Avatar"
      />
    </div>
  );
}

export default NavBar;
