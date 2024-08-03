import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div
        id="hero_container"
        className="flex flex-col lg:flex-row gap-y-10 justify-between sm:mt-[200px] mt-[150px] pt-5 sm:pt-0 sm:px-5 px-1 items-center "
      >
        <div
          id="content"
          className="text-center lg:text-left w-full lg:w-[60%]"
        >
          <h1 className="mb-4 sm:text-4xl text-2xl text-pretty bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            The Freedom to Design the Digital Products{" "}
            <span className="text-gray-400">You Envision</span>
          </h1>
          <p>
            A professional website enhances your digital presence. Design a
            stunning website to captivate and engage your audience, showcasing
            your digital products and growing your online business.
          </p>

          <div id="button_container" className="flex gap-3 justify-center mt-8">
            <Link href="#product_list">
              <button
                className="bg-primary_1  px-5 py-3 font-bold text-white rounded-lg
          hover:bg-purple-600 text-sm transition duration-75 ease-in
        "
              >
                Get Started
              </button>
            </Link>

            <Link href="/Pages/about">
              <button
                className="bg-gray-400 px-5 py-3 font-bold text-white rounded-lg
          hover:bg-gray-500 text-sm transition duration-75 ease-in 
        "
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div id="undraw_container" className="ml-auto">
          <Image
            src="/Images/undraw_online_ad_re_ol62.png"
            className="md:min-w-[500px] "
            width={800}
            height={800}
            alt="undraw"
          />
        </div>
      </div>
    </>
  );
}
