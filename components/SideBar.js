import ClassGroup from "classgroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const SideBar = ({ handleSidebar, sidebar }) => {
  return (
    <div className={`${classes.sidebarContainer} ${sidebar ? "" : "hidden"}`}>
      <div className={classes.topSidebar}>
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <FontAwesomeIcon
          className={classes.closeButton}
          icon={faXmark}
          onClick={handleSidebar}
        />
      </div>
      <div className={classes.botSidebar}>
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
    decoration: "bg-black text-white font-font2 text-4xl",
    layout: "h-screen w-full z-30 absolute pt-16",
  },

  topSidebar: {
    layout: "flex justify-between mx-auto max-w-sm",
  },

  closeButton: {
    layout: "h-8",
  },

  botSidebar: {
    layout: "flex flex-col mx-auto mt-44 space-y-6 max-w-sm",
  },
});
