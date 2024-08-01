import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";

export default function CheckoutForm() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  return (
    <div className="mt-[100px] lg:mx-80 md:mx-52 sm:mx-20 mx-5">
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          type="submit"
          className="relative mt-4 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group w-fit bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Submit
          </span>
        </button>
      </form>

      {showAlert && (
        <div
          className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <FcCheckmark className="flex-shrink-0 text-[20px] text-green-800 mr-1" />
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">Payment successful!</span> Thank you
            for your purchase.
          </div>
        </div>
      )}
    </div>
  );
}
