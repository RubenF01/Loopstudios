import NavBar from "./NavBar";
import ClassGroup from "classgroup";

const Hero = () => {
  return (
    <div className={classes.heroContainer}>
      <NavBar />
      <div className={classes.heroContent}>
        <img
          className={classes.heroImage}
          src="/desktop/image-hero.jpg"
          alt="hero"
        />
        <div className={classes.textLayout}>
          <div className={classes.textContainer}>
            <h1 className={classes.heroText}>IMMERSIVE</h1>
            <h1 className={classes.heroText}>EXPERIENCES</h1>
            <h1 className={classes.heroText}>THAT DELIVER</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const classes = ClassGroup({
  heroContainer: {
    layout: "relative",
    xl2: "w-full",
  },

  heroContent: {
    layout: "min-h-[80vh] flex flex-col",
  },

  textLayout: {
    layout:
      "flex max-w-7xl mx-auto items-center h-full flex-1 justify-start w-full",
  },

  textContainer: {
    layout:
      "border-2 pl-10 pr-24 py-4 flex flex-col space-y-[-30px] top-60 left-60",
  },

  heroText: {
    decoration: "font-font2 text-white text-[60px]",
  },

  heroImage: {
    layout: "w-full h-full object-cover absolute inset-0 z-[-1]",
  },
});
