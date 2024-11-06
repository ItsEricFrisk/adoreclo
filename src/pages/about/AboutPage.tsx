import working from "../../assets/working.jpg";
import work from "../../assets/work.jpg";

export default function About() {
  return (
    <main className="w-full h-auto flex flex-col py-14 px-10 items-center font-lato">
      <img
        src={working}
        alt="Image of the person behind Adoréclo"
        className="shadow-lg rounded-sm md:w-1/3"
      />
      <h1 className="text-4xl  mt-5">Adoréclo</h1>
      <p className="mt-4 md:w-1/3">
        Welcome to <span className="font-semibold">Adoréclo</span>, a clothing
        brand born from a deep passion and a dream to create something unique.
        Hailing from a small town, I’ve dedicated countless nights and shed many
        tears to bring this vision to life. Adoréclo is my way of showing that
        everything is achievable.
      </p>
      <img
        src={work}
        alt="Working on the product"
        className="w-2/3 mt-8 shadow-lg rounded-sm md:w-1/3"
      />
      <p className="mt-4 md:w-1/3">
        Each piece is meticulously designed with a focus on quality and
        sustainability. I select high-standard materials that are stylish yet
        economical. To minimize our impact on the environment, our clothing is
        produced in limited quantities. Together, we can make a difference and
        embrace a more conscious approach to fashion.
      </p>
      <p className="self-end text-md md:self-center  text-gray-400">
        - Ai generated text{" "}
      </p>
    </main>
  );
}
