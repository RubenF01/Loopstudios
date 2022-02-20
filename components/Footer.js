import ClassGroup from 'classgroup';

const Footer = () => {
 return (
  <div className={classes.footerContainer}>
   <div className={classes.topFooter}>
    <img src="/logo.svg" alt="logo" />
    <div className={classes.socialContainer}>
     <img className={classes.socialIcon} src="/icon-facebook.svg" alt="facebook" />
     <img className={classes.socialIcon} src="/icon-twitter.svg" alt="twitter" />
     <img className={classes.socialIcon} src="/icon-pinterest.svg" alt="pinterest" />
     <img className={classes.socialIcon} src="/icon-instagram.svg" alt="instagram" />
    </div>
   </div>

   <div className={classes.botFooter}>
    <div className={classes.botNav}>
     <a className={classes.navElement} href="#">About</a>
     <a className={classes.navElement} href="#">Careers</a>
     <a className={classes.navElement} href="#">Events</a>
     <a className={classes.navElement} href="#">Products</a>
     <a className={classes.navElement} href="#">Support</a>
    </div>
    <p className={classes.copyright}>&copy; 2022 Loopstudios. All rights reserved.</p>
   </div>
  </div>
 )
}

export default Footer;

const classes = ClassGroup({
 footerContainer: {
  decoration: "bg-black py-10"
 },

 topFooter: {
  layout: "flex w-full justify-between px-80 pb-5",
 },

 socialContainer: {
  layout: "flex"
 },

 botFooter: {
  layout: "w-full flex justify-between px-80",
  decoration: "text-white font-font1"
 },

 botNav: {
  layout: "flex gap-x-8"
 },

 navElement: {
  content: "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute flex justify-center relative after:z-10 hover:after:bottom-[-10px]"
 },

 socialIcon: {
  layout: "h-6 px-2 cursor-pointer",
  content: "after:content-[''] after:bg-white after:h-px after:w-6 after:absolute flex justify-center relative after:z-10 after:bottom-[-10px]"
 },

 copyright: {
  decoration: "text-veryDarkGray"
 },
});