import ClassGroup from "classgroup";

const LeaderSection = () => {
  return (
    <div className={classes.sectionContainer}>
      <img
        className={classes.sectionImage}
        src="/desktop/image-interactive.jpg"
        alt="interactive"
      />
      <div className={classes.textContainer}>
        <h1 className={classes.title}>THE LEADER IN INTERACTIVE VR</h1>
        <p className={classes.paragraph}>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
};

export default LeaderSection;

const classes = ClassGroup({
  sectionContainer: {
    layout: "flex 2xl:max-w-7xl mx-auto relative w-full my-32",
    xl: "xl:max-w-5xl",
  },

  sectionImage: {
    layout: "w-[70%]",
  },

  textContainer: {
    layout:
      "max-w-xl leading-none max-h-[35vh] mt-96 ml-[-160px] absolute bottom-0 right-0 pt-24 pl-24",
    decoration: "bg-white",
    xl2: "2xl:pr-0",
  },

  title: {
    layout: "pb-6",
    decoration: "text-[45px] font-font2",
  },

  paragraph: {
    decoration: "font-font1 text-darkGray",
  },
});
