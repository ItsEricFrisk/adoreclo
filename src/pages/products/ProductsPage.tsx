import { Link } from "react-router-dom";

export default function ProductsPage() {
  return (
    <main className="py-12 w-screen min-h-screen flex flex-col items-center justify-center font-lato">
      <h2 className="text-2xl">Currently in the design phase.</h2>
      <p className="text-lg ">we'll be dressing you up soon!</p>
      <p className="mt-10 text-sm">
        While you wait, sign up for our waiting list.
      </p>
      <form
        action="#"
        className="h-20 w-60 flex items-center justify-center flex-col mt-5"
      >
        {/* Fake inputfield for email registration */}
        <input
          type="email"
          className="relative top-0 left-0 w-full h-full border-2 border-black px-2 bg-opacity-30 bg-white text-black rounded-lg placeholder:text-gray-900"
          placeholder="Join our waitlist now"
        />
        {/* Link to the original Adoréclo */}
        <Link
          to={"https://www.adoreclo.com/password"}
          className="relative -top-10 left-[100px] border-l w-9 h-full border-black rounded-r-lg flex justify-center items-center"
          aria-label="Visit the real adoréclo"
        >
          <svg
            width="15"
            height="25"
            viewBox="0 0 11 8"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64645L7.17157 0.464466C6.97631 0.269204 6.65973 0.269204 6.46447 0.464466C6.2692 0.659728 6.2692 0.976311 6.46447 1.17157L9.29289 4L6.46447 6.82843C6.2692 7.02369 6.2692 7.34027 6.46447 7.53553C6.65973 7.7308 6.97631 7.7308 7.17157 7.53553L10.3536 4.35355ZM0 4.5L10 4.5V3.5L0 3.5L0 4.5Z"
              fill="#000"
            />
          </svg>
        </Link>
      </form>
    </main>
  );
}
