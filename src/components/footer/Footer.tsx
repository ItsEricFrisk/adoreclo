import { Link } from "react-router-dom";

// NOT USED YET
export default function Footer() {
  return (
    <section className="w-full h-72 py-10 flex flex-col justify-around items-center">
      <p className="text-sm tracking-wider">Adoréclo</p>
      <div className="flex justify-between w-48">
        <Link to={"https://www.instagram.com/adoreclo_/"} target="_blank">
          <img
            src="./src/assets/instagram_logo.png"
            alt="Instagram logo"
            className="w-10"
          />
        </Link>
        <Link to={"https://www.tiktok.com/@adoreclo_"} target="_blank">
          <img
            src="./src/assets/tiktok_logo.png"
            alt="Tiktok logo"
            className="w-10"
          />
        </Link>
      </div>
      <p className="">Some questions or idéas?</p>
      <Link to={"/contact"} className="underline">
        Reach out
      </Link>
    </section>
  );
}
