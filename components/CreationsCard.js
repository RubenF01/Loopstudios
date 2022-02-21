import ClassGroup from "classgroup";

const CreationsCard = ({ imgSrcDesktop, imgSrcMobile, title }) => {
  return (
    <div className={classes.cardContainer}>
      <figure className={classes.imageFigure}>
        <img className={classes.cardImg} src={imgSrcDesktop} alt={title} />
      </figure>
      <div className={classes.overlay}>
        <h1
          className={`${classes.title} ${
            title === "the grid" ? "pl-10 pr-20" : "px-10"
          }`}
        >
          {title.toUpperCase()}
        </h1>
      </div>
    </div> // move ternary to classes object.
  );
};

export default CreationsCard;

const classes = ClassGroup({
  cardContainer: {
    layout: "relative w-65",
    decoration: "cursor-pointer text-white hover:text-black",
  },

  imageFigure: {
    layout: "h-[450px] object-cover brightness-75",
  },

  cardImg: {
    layout: "z-[-1] w-full h-full",
  },

  title: {
    layout: `absolute text-[30px] inset-0 pt-[22rem] leading-8`,
  },

  overlay: {
    layout: "h-full w-full absolute inset-0 hover:opacity-50",
    content: "hover:bg-white",
  },
});
