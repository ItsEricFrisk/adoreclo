import { motion } from "framer-motion";
import { useState } from "react";

export default function Faq() {
  const [toggleFaq, setToggleFaq] = useState<number | null>(null);

  return (
    <section
      className={`w-full md:w-1/3 bg-white font-lato flex flex-col items-start px-2 py-4`}
    >
      <h3 className="col-span-3 font-semibold mb-4">
        Frequently asked questions
      </h3>
      {/* FAQ Item 1 */}
      <div
        className={` 
        h-auto cursor-pointer px-3 flex flex-col items-start justify-center`}
        onClick={() => setToggleFaq(toggleFaq === 1 ? null : 1)}
      >
        <motion.p
          initial={{ color: "#000" }}
          animate={{ color: toggleFaq === 1 ? "#0039e2" : "#000" }}
          className="text-sm font-semibold"
        >
          What are your shipping options?
        </motion.p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: toggleFaq === 1 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-sm">
            We offer three shipping options: <br />
            <br /> Standard (5-7 business days), <br />
            <br />
            Express (2-3 business days), <br /> <br /> and International (7-14
            business days, depending on the location). <br /> <br /> All orders
            are processed within 1-2 business days. Please note that during peak
            seasons like holidays, shipping times may vary slightly due to high
            demand. Once your order ships, you’ll receive a tracking number to
            monitor its progress.
          </p>
        </motion.div>
      </div>
      {/* FAQ Item 2 */}
      <div
        className={` 
         h-auto cursor-pointer px-3 my-4 flex flex-col items-start justify-center `}
        onClick={() => setToggleFaq(toggleFaq === 2 ? null : 2)}
      >
        <motion.p
          className="text-sm font-semibold"
          initial={{ color: "#000" }}
          animate={{ color: toggleFaq === 2 ? "#0039e2" : "#000" }}
        >
          What is your return and exchange policy?
        </motion.p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: toggleFaq === 2 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-sm">
            If you’re not fully satisfied with your purchase, you have 30 days
            from the delivery date to initiate a return or exchange. Items must
            be unworn, unwashed, and have all original tags attached. To start
            the return process, visit our Returns Portal on our website. We
            offer free returns on all domestic orders, while international
            customers may be responsible for return shipping costs. Once we
            receive your returned item, we’ll process your refund or exchange
            within 5-7 business days.
          </p>
        </motion.div>
      </div>
      {/* FAQ Item 3 */}
      <div
        className={` 
        h-auto cursor-pointer px-3 flex flex-col items-start justify-center `}
        onClick={() => setToggleFaq(toggleFaq === 3 ? null : 3)}
      >
        <motion.p
          className="text-sm font-semibold"
          initial={{ color: "#000" }}
          animate={{ color: toggleFaq === 3 ? "#0039e2" : "#000" }}
        >
          How can I choose the right size?
        </motion.p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: toggleFaq === 3 ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="mt-4 text-sm">
            To find the perfect fit, check out our Size Guide linked on each
            product page. We recommend measuring your bust, waist, and hips and
            comparing them with our chart to select the right size. Our sizing
            is based on standard measurements, but if you’re between sizes, we
            suggest sizing up for a relaxed fit. Additionally, customer reviews
            often include feedback on fit, which can be helpful for choosing the
            right size.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
