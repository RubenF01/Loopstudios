import ClassGroup from "classgroup";
import { useMedia } from "react-use";
import NavBarLinks from "./NavBarLinks";
import Hamburger from "./Hamburger";

const NavBar = ({ sidebar, setSidebar }) => {
  const desktopSize = useMedia("(min-width: 1024px)");
  return (
    <div className={classes.navContainer}>
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      {desktopSize ? (
        <NavBarLinks />
      ) : (
        <Hamburger sidebar={sidebar} setSidebar={setSidebar} />
      )}
    </div>
  );
};

export default NavBar;

const classes = ClassGroup({
  navContainer: {
    layout: "flex justify-between w-full pt-16 xl:max-w-7xl mx-auto left-60",
    xl: "xl:max-w-7xl",
    lg: "lg:max-w-4xl",
  },

  navElementsContainer: {
    layout: "flex relative",
  },

  navElement: {
    layout: "font-font1 pl-8 flex justify-center",
    decortation: "text-white",
    content:
      "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute hover:after:bottom-0",
  },
});
