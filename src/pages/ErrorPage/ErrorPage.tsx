import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-5xl font-bold tracking-widest">404</h2>
      <p className="text-sm my-5 text-gray-700 font-semibold text-center w-64">
        hm, the page you were looking for doesn't seem to exist anymore.
      </p>
      <Link
        to={"/"}
        className="px-4 py-1 border rounded-md border-gray-700 shadow-md hover:scale-95 hover:shadow-none"
      >
        Back to start
      </Link>
    </main>
  );
}
