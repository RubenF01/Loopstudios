import ClassGroup from "classgroup";

const Hamburger = ({ handleSidebar }) => {
  return (
    <div className="tham tham-w-8" onClick={handleSidebar}>
      <div className="tham-box">
        <div className="tham-inner bg-white" />
      </div>
    </div>
  );
};

export default Hamburger;

const classes = ClassGroup({
  container: {
    layout: "space-y-2",
  },

  menuLine: {
    layout: "w-8 h-0.5",
    decoration: "bg-gray-600",
  },
});
