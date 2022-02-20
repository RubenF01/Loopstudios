import ClassGroup from 'classgroup';

const LeaderSection = () => {
 return (
  <div className={classes.sectionContainer}>
   <img className={classes.sectionImage} src="/desktop/image-interactive.jpg" alt="interactive" />
   <div className={classes.textContainer}>
    <h1 className={classes.title}>THE LEADER IN INTERACTIVE VR</h1>
    <p className={classes.paragraph}>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
   </div>
  </div>
 )
}

export default LeaderSection;

const classes = ClassGroup({
 sectionContainer: {
  layout: "flex"
 },

 sectionImage: {
  layout: 'my-40 ml-80'
 },

	textContainer: {
		layout: 'max-w-xl leading-none p-20 max-h-[35vh] mt-96 ml-[-160px]',
  decoration: 'bg-white'  
	},

 title: {
  layout: 'pb-6',
  decoration: 'text-[45px] font-font2'
 },

 paragraph: {
  decoration: 'font-font1 text-darkGray'
 }
});