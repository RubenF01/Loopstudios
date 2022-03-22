import ClassGroup from "classgroup";

const CreationsCard = ({ imgSrcDesktop, imgSrcMobile, title, desktopSize }) => {
  return (
    <div className={classes.cardContainer}>
      <figure className={classes.imageFigure}>
        <img
          className={classes.cardImg}
          src={`${desktopSize ? imgSrcDesktop : imgSrcMobile}`}
          alt={title}
        />
      </figure>
      <div className={classes.overlay}>
        <h1
          className={`${classes.title} ${
            title === "the grid"
              ? "xl:pl-10 xl:pr-28 lg:pl-5 lg:pr-16 sm:pl-8 sm:pr-[35rem] pl-5 pr-[20rem]"
              : "xl:pl-10 xl:pr-20 lg:px-5 sm:pl-8 sm:pr-[30rem] pl-5 pr-[11rem]"
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
    layout: "brightness-75 w-full",
    xl: "xl:h-[500px]",
    lg: "lg:h-[450px]",
  },

  cardImg: {
    layout: "z-[-1] w-full h-full object-cover",
  },

  title: {
    layout: "block leading-8",
    xl: "xl:pt-[25rem]",
    lg: "lg:pt-[22rem]",
    sm: "sm:pt-[8rem] sm:text-[30px]",
    mobile: "pt-[3rem] text-[22px]",
  },

  overlay: {
    layout: "h-full w-full absolute inset-0 hover:opacity-50",
    content: "hover:bg-white",
  },
});
