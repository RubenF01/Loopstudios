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
            title === "the grid" ? "pl-14 pr-28" : "px-16"
          }`}
        >
          {title.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};

export default CreationsCard;

const classes = ClassGroup({
  cardContainer: {
    layout: "relative w-full",
    decoration: "cursor-pointer text-white hover:text-black",
  },

  imageFigure: {
    layout: "h-[500px] brightness-75 w-full",
  },

  cardImg: {
    layout: "z-[-1] w-full h-full object-cover",
  },

  title: {
    layout: `block text-[30px] pt-[25rem] ml-0 leading-8`,
  },

  overlay: {
    layout: "h-full w-full absolute inset-0 hover:opacity-50",
    content: "hover:bg-white",
  },
});
