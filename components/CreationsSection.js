import ClassGroup from 'classgroup';
import CreationsCard from './CreationsCard';

const CreationsSection = () => {
 const CardContent = [
  {
   imgSrc: "/desktop/image-deep-earth.jpg",
   title: "deep earth"
  },
 
  {
   imgSrc: "/desktop/image-night-arcade.jpg",
   title: "night arcade"
  },
 
  {
   imgSrc: "/desktop/image-soccer-team.jpg",
   title: "soccer team vr"
  },
 
  {
   imgSrc: "/desktop/image-grid.jpg",
   title: "the grid"
  },
 
  {
   imgSrc: "/desktop/image-from-above.jpg",
   title: "from up above vr"
  },
 
  {
   imgSrc: "/desktop/image-pocket-borealis.jpg",
   title: "pocket borealis"
  },
 
  {
   imgSrc: "/desktop/image-curiosity.jpg",
   title: "the curiosity"
  },
 
  {
   imgSrc: "/desktop/image-fisheye.jpg",
   title: "make it fisheye"
  },
 ]

 return (
  <div className={classes.sectionContainer}>
   <div className={classes.creationsHeader}>
    <h1 className={classes.title}>OUR CREATIONS</h1>
    <a className={classes.button} hred="#"><button>SEE ALL</button></a>
   </div>
   <div className={classes.cardContainer}>
    {CardContent.map(card => {
     return <CreationsCard imgSrc={card.imgSrc} title={card.title} key={card.title} />
    })}
   </div>
  </div>
 )
}

export default CreationsSection;

const classes = ClassGroup({
 sectionContainer: {
  decoration: "font-font2 pb-36"
 },

 creationsHeader: {
  layout: "w-full flex justify-between px-80 items-center pb-16"
 },

 title: {
  layout: "text-[40px]"
 },

 button: {
  layout: "border-[1px] flex self-center px-5 py-1",
  decoration: "font-font2 border-black font-bold",
  content: "hover:bg-black hover:text-white"
 },

 cardContainer: {
  layout: "grid grid-cols-4 justify-items-center px-[19rem] gap-y-10"
 }
});