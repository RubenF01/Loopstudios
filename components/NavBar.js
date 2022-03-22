import ClassGroup from "classgroup";
import NavBarLinks from "./NavBarLinks";
import Hamburger from "./Hamburger";

const NavBar = ({ handleSidebar, desktopSize }) => {
  return (
    <div className={classes.navContainer}>
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      {desktopSize ? (
        <NavBarLinks />
      ) : (
        <Hamburger handleSidebar={handleSidebar}></Hamburger>
      )}
    </div>
  );
};

export default NavBar;

const classes = ClassGroup({
  navContainer: {
    layout: "flex justify-between w-full pt-16 mx-auto left-60",
    xl: "xl:max-w-7xl",
    lg: "lg:max-w-4xl",
    md: "md:max-w-2xl",
    mobile: "max-w-xs",
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
