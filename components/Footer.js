import ClassGroup from "classgroup";
import Image from "next/image";

const SocialList = [
  {
    src: "/icon-facebook.svg",
    title: "facebook",
  },

  {
    src: "/icon-twitter.svg",
    title: "twitter",
  },
  {
    src: "/icon-pinterest.svg",
    title: "pinterest",
  },
  {
    src: "/icon-instagram.svg",
    title: "instagram",
  },
];

const FooterNav = [
  {
    title: "About",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Events",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Support",
    href: "#",
  },
];

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.topFooter}>
        <Image
          width="140"
          height="50"
          src="/logo.svg"
          alt="logo"
          objectFit="contain"
        />
        <div className={classes.socialContainer}>
          {SocialList.map((icon) => (
            <div className={classes.iconContainer} key={icon.title}>
              <Image
                className={classes.socialIcon}
                src={icon.src}
                alt={icon.title}
                width="24"
                height="24rem"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>

      <div className={classes.botFooter}>
        <div className={classes.botNav}>
          {FooterNav.map((link) => (
            <a className={classes.navElement} href={link.href} key={link.title}>
              {link.title}
            </a>
          ))}
        </div>
        <p className={classes.copyright}>
          &copy; 2022 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

const classes = ClassGroup({
  footerContainer: {
    decoration: "bg-black py-10",
  },

  topFooter: {
    layout: "flex w-full justify-between",
    xl: "xl:max-w-5xl xl:mx-auto xl:mb-3"
  },

  socialContainer: {
    layout: "flex gap-x-3",
  },

  iconContainer: {
    content:
      "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute hover:relative hover:after:z-10 hover:after:bottom-0 flex justify-center",
  },

  botFooter: {
    layout: "w-full flex justify-between",
    decoration: "text-white font-font1",
    xl: "xl:max-w-5xl xl:mx-auto"
  },

  botNav: {
    layout: "flex gap-x-7",
  },

  navElement: {
    content:
      "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute flex justify-center relative after:z-10 hover:after:bottom-[-10px]",
  },

  socialIcon: {
    layout: "cursor-pointer",
  },

  copyright: {
    decoration: "text-veryDarkGray",
  },
});
