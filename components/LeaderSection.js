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
    layout: "flex mx-auto relative w-full",
    xl: "xl:max-w-7xl",
    lg: "lg:max-w-4xl lg:flex-row lg:justify-start",
    sm: "sm:max-w-2xl sm:my-32",
    mobile: "max-w-xs flex-col items-center my-28",
  },

  sectionImage: {
    lg: "lg:w-[70%]",
    md: "md:w-full",
  },

  textContainer: {
    layout: "leading-none max-h-[35vh]",
    decoration: "bg-white",
    xl: "xl:pt-24 xl:pl-24",
    lg: "lg:pt-16 lg:pl-12 lg:ml-[-160px] lg:absolute lg:bottom-0 lg:right-0 lg:pr-0 lg:mt-96 lg:text-left lg:max-w-xl",
    mobile: "text-center pt-10",
  },

  title: {
    layout: "pb-6",
    decoration: "font-font2",
    lg: "lg:pt-0",
    md: "md:pt-10",
    sm: "sm:text-[45px]",
    mobile: "text-[40px]",
  },

  paragraph: {
    decoration: "font-font1 text-darkGray leading-relaxed",
  },
});
