import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import Express from "../assets/Express.png";
import NodeLogo from "../assets/NodeLogo.png";
import mongodb from "../assets/mongodb.svg";
import cloudinary from "../assets/cloudinary.png";
import gateway from "../assets/gateway.png";
import Photoshop from "../assets/photoshop.png";

const icons = [
  Javascript,
  ReactLogo,
  ReduxLogo,
  Tailwind,
  Bootstrap,
  Express,
  NodeLogo,
  mongodb,
  cloudinary,
  gateway,
  Photoshop,
];

const Logo = () => {
  return (
    <div className="relative w-screen overflow-hidden mt-20">
      
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 
                      bg-gradient-to-r from-white to-transparent z-10" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-24 
                      bg-gradient-to-l from-white to-transparent z-10" />

      {/* Marquee */}
      <div className="flex w-max items-center marquee">
        {[...icons, ...icons].map((icon, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-4 sm:px-6 md:px-8"
          >
            <img
              src={icon}
              alt="tech"
              className="
                w-20 h-20
                sm:w-28 sm:h-28
                md:w-36 md:h-36
                lg:w-44 lg:h-44
                object-contain
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
