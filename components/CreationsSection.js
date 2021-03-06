import ClassGroup from "classgroup";
import CreationsCard from "./CreationsCard";

const CardContent = [
  {
    imgSrcDesktop: "/desktop/image-deep-earth.jpg",
    imgSrcMobile: "/mobile/image-deep-earth.jpg",
    title: "deep earth",
  },

  {
    imgSrcDesktop: "/desktop/image-night-arcade.jpg",
    imgSrcMobile: "/mobile/image-night-arcade.jpg",
    title: "night arcade",
  },

  {
    imgSrcDesktop: "/desktop/image-soccer-team.jpg",
    imgSrcMobile: "/mobile/image-soccer-team.jpg",
    title: "soccer team vr",
  },

  {
    imgSrcDesktop: "/desktop/image-grid.jpg",
    imgSrcMobile: "/mobile/image-grid.jpg",
    title: "the grid",
  },

  {
    imgSrcDesktop: "/desktop/image-from-above.jpg",
    imgSrcMobile: "/mobile/image-from-above.jpg",
    title: "from up above vr",
  },

  {
    imgSrcDesktop: "/desktop/image-pocket-borealis.jpg",
    imgSrcMobile: "/mobile/image-pocket-borealis.jpg",
    title: "pocket borealis",
  },

  {
    imgSrcDesktop: "/desktop/image-curiosity.jpg",
    imgSrcMobile: "/mobile/image-curiosity.jpg",
    title: "the curiosity",
  },

  {
    imgSrcDesktop: "/desktop/image-fisheye.jpg",
    imgSrcMobile: "/mobile/image-fisheye.jpg",
    title: "make it fisheye",
  },
];

const CreationsSection = ({ desktopSize }) => {
  if (desktopSize) {
    return (
      <div className={classes.sectionContainer}>
        <div className={classes.creationsHeader}>
          <h1 className={classes.title}>OUR CREATIONS</h1>
          <a className={classes.button} hred="#">
            <button>SEE ALL</button>
          </a>
        </div>
        <div className={classes.cardContainer}>
          {CardContent.map((card) => {
            return (
              <CreationsCard
                desktopSize={desktopSize}
                imgSrcDesktop={card.imgSrcDesktop}
                title={card.title}
                key={card.title}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.sectionContainer}>
        <div className={classes.creationsHeader}>
          <h1 className={classes.title}>OUR CREATIONS</h1>
        </div>
        <div className={classes.cardContainer}>
          {CardContent.map((card) => {
            return (
              <CreationsCard
                imgSrcMobile={card.imgSrcMobile}
                title={card.title}
                key={card.title}
              />
            );
          })}
        </div>
        <a className={classes.button} hred="#">
          <button>SEE ALL</button>
        </a>
      </div>
    );
  }
};

export default CreationsSection;

const classes = ClassGroup({
  sectionContainer: {
    layout: "flex flex-col mx-auto mb-32",
    decoration: "font-font2",
    xl2: "2xl:max-w-7xl",
    xl: "xl:max-w-5xl",
    lg: "lg:max-w-4xl",
    md: "md:max-w-2xl",
    mobile: "max-w-xs",
  },

  creationsHeader: {
    layout: "w-full flex items-center pb-16",
    lg: "lg:justify-between",
    mobile: "justify-center",
  },

  title: {
    sm: "sm:text-[40px]",
    mobile: "text-[35px]",
  },

  button: {
    layout: "border-[1px] flex self-center",
    decoration: "font-font2 border-black font-bold",
    content: "hover:bg-black hover:text-white",
    lg: "lg:text-base lg:px-5 lg:py-1 lg:mt-0",
    mobile: "text-xl mt-14 px-16 py-3",
  },

  cardContainer: {
    layout: "grid justify-items-center",
    xl: "xl:gap-10",
    lg: "lg:gap-5 lg:grid-cols-4",
    mobile: "gap-8",
  },
});
