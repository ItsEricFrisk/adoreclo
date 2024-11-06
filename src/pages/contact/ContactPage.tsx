import Faq from "../../components/faq/Faq";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-between py-12">
      <Faq />
      {/* Should be a form but I dont want to send any data */}
      <div className="w-full md:w-1/3 max-h-1/3 flex flex-col justify-between items-center p-3 mt-10">
        <h3 className="text-lg font-semibold">Do you still have questions?</h3>
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="text-sm self-start">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="email" className="text-sm self-start">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-sm p-2 focus:outline-none"
            placeholder="Email"
            required
          />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="message" className="text-sm self-start">
            Message
          </label>

          <textarea
            name="message"
            id="message"
            className="w-full p-1 border border-gray-300 focus:outline-none resize-none"
            placeholder="Message..."
            maxLength={500}
          ></textarea>
        </div>
        <Link
          to={"https://www.adoreclo.com/"}
          className="px-4 py-1 border rounded-sm mt-5 shadow-sm active:scale-95"
        >
          Send
        </Link>
      </div>
    </main>
  );
}
