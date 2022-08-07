import videoThumb from "../assets/img-video.png";
import iconArrow from "../assets/icon-arrow.svg"

const Footer = () => {
  return (
    <footer className="h-1/4 m-0 grid grid-cols-footer">
      <img
        src={videoThumb}
        alt="A video thumbnail of a person putting shoes on"
        className="h-full"
      />

      <nav className="list-none flex flex-row items-center justify-around font-bold">
        <li className="hover:cursor-pointer">FACEBOOK</li>
        <li className="hover:cursor-pointer">INSTAGRAM</li>
        <li className="hover:cursor-pointer">YOUTUBE</li>
        <li className="hover:cursor-pointer">TWITTER</li>
      </nav>

      <a
        className="no-underline flex items-center justify-center gap-2 text-xl text-white bg-black border-solid border-2 border-black basis-10"
        href="#"
      >
        EXPLORE MAIS
        <img src={iconArrow} alt="An arrow pointing to the right" />
      </a>
    </footer>
  );
};

export default Footer;
