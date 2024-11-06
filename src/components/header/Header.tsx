import { Link } from "react-router-dom";
import MenuIcon from "../menuIcon/MenuIcon";
import adoreLogo from "../../assets/AdoreLogo.svg";

export default function Header() {
  return (
    <section className="fixed top-0 left-0 w-full h-[50px] flex justify-between items-center px-5 z-50 bg-white border-b">
      <Link to={"/"}>
        <img
          src={adoreLogo}
          alt="Adoreclo logo"
          className="w-[40px] h-[40px]"
        />
      </Link>
      <MenuIcon />
    </section>
  );
}
