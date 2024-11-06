import { Link } from "react-router-dom";
import MenuIcon from "../menuIcon/MenuIcon";

export default function Header() {
  return (
    <section className="fixed top-0 left-0 w-full h-[50px] flex justify-between items-center px-5 z-50 bg-white border-b">
      <Link to={"/"}>
        <img
          src="./src/assets/A_logo.webp"
          alt="instagram logo"
          className="w-[50px] h-[50px]"
        />
      </Link>
      <MenuIcon />
    </section>
  );
}
