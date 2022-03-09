import ClassGroup from "classgroup";

const SideBar = ({ sidebar }) => {
  return (
    <div className={classes.sidebarContainer}>
      <div className={classes.topSidebar}>
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <button type="button">X</button>
      </div>
      <div className={`${classes.botSidebar} ${sidebar ? "" : "hidden"}`}>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </div>
    </div>
  );
};

export default SideBar;

const classes = ClassGroup({
  sidebarContainer: {
    decoration: "bg-black text-white",
    layout: "h-screen w-screen z-30 absolute",
  },

  topSidebar: {
    layout: "flex justify-between",
  },

  botSidebar: {
    layout: "flex flex-col",
  },
});
