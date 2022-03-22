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

const Footer = ({ desktopSize }) => {
  if (desktopSize) {
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
                  height="24"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={classes.botFooter}>
          <div className={classes.botNav}>
            {FooterNav.map((link) => (
              <a
                className={classes.navElement}
                href={link.href}
                key={link.title}
              >
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
  } else {
    return (
      <div className={classes.footerContainer}>
        <div className={classes.topFooter}>
          <Image
            width="200"
            height="110"
            src="/logo.svg"
            alt="logo"
            objectFit="contain"
          />
          <div className={classes.botNav}>
            {FooterNav.map((link) => (
              <a
                className={classes.navElement}
                href={link.href}
                key={link.title}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>

        <div className={classes.botFooter}>
          <div className={classes.socialContainer}>
            {SocialList.map((icon) => (
              <div className={classes.iconContainer} key={icon.title}>
                <Image
                  className={classes.socialIcon}
                  src={icon.src}
                  alt={icon.title}
                  width="30"
                  height="30"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
          <p className={classes.copyright}>
            &copy; 2022 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
};

export default Footer;

const classes = ClassGroup({
  footerContainer: {
    decoration: "bg-black py-10 flex flex-col items-center",
  },

  topFooter: {
    layout: "flex w-full",
    xl: "xl:max-w-7xl",
    lg: "lg:max-w-4xl lg:flex-row lg:justify-between lg:items-start lg:mb-3 lg:gap-y-0 lg:mb-3",
    sm: "sm:flex-col sm:items-center sm:mb-16 sm:gap-y-6",
    mobile: "flex-col items-center mb-16 gap-y-6",
  },

  socialContainer: {
    layout: "flex",
    lg: "lg:gap-x-3",
    mobile: "gap-x-5",
  },

  iconContainer: {
    content:
      "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute hover:relative hover:after:z-10 hover:after:bottom-[-10px] flex justify-center",
  },

  botFooter: {
    layout: "flex w-full justify-between",
    xl: "xl:max-w-7xl",
    lg: "lg:max-w-4xl lg:flex-row lg:items-start lg:gap-y-0 lg:mb-0",
    mobile: "flex-col items-center gap-y-8 mb-8",
  },

  botNav: {
    layout: "flex",
    lg: "lg:flex-row lg:gap-x-7",
    mobile: "flex-col gap-y-7",
  },

  navElement: {
    content:
      "hover:after:content-[''] hover:after:bg-white hover:after:h-px hover:after:w-6 hover:after:absolute flex justify-center relative after:z-10 hover:after:bottom-[-10px]",
    decoration: "font-font1 text-white",
  },

  socialIcon: {
    layout: "cursor-pointer",
  },

  copyright: {
    decoration: "text-veryDarkGray font-font1",
  },
});
