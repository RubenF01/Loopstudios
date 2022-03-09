import ClassGroup from "classgroup";

const NavBarLinks = () => {
  return (
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
  );
};

export default NavBarLinks;

const classes = ClassGroup({
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
