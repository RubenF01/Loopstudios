import ClassGroup from "classgroup";

const NavBar = () => {
  return (
    <div className={classes.navContainer}>
      <div>
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className={classes.navElementsContainer}>
        <a className={classes.navElement} href="#">
          About
        </a>
        <a className={classes.navElement} href="#">
          Careers
        </a>
        <a className={classes.navElement} href="#">
          Events
        </a>
        <a className={classes.navElement} href="#">
          Products
        </a>
        <a className={classes.navElement} href="#">
          Support
        </a>
      </div>
    </div>
  );
};

export default NavBar;

const classes = ClassGroup({
  navContainer: {
    layout: "flex justify-between w-full pt-16 max-w-7xl mx-auto",
  },

  navElementsContainer: {
    layout: "flex",
  },

  navElement: {
    layout: "font-font1 pl-8 flex justify-center",
    decortation: "text-white",
    content:
      "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute hover:after:bottom-0",
  },
});
