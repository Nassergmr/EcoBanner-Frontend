import Product_section from "./_Components/Body/ProductsSection/product_section";
import Hero from "./_Components/Body/Hero/hero";
import { FaInfoCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="info flex items-center gap-x-2 absolute justify-center top-[-70px] sm:top-[-110px] text-center flex-col md:flex-row w-full px-3 sm:px-0">
        <FaInfoCircle className="text-purple-500" />
        <h1 className="text-gray-400 text-sm">
          "Due to the current limitations of my free instance, data may take up
          to <span className="text-purple-500">50 seconds</span> to appear on
          the website"
        </h1>
      </div>
      <Hero />
      <Product_section />
    </div>
  );
}
