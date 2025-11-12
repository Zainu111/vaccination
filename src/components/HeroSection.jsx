import syringe from "../assets/vaccination/syringe.svg";
import global from "../assets/vaccination/global.svg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <Link to="/" className="inline-block mb-8 sm:mb-12">
          <img
            src="./ghp-logo.png"
            alt="Logo"
            className="h-16 sm:h-20 lg:h-24 w-auto"
          />
        </Link>

        <div className="relative flex flex-col items-center lg:items-end text-center lg:text-right">
          <img
            src={global}
            alt=""
            className="hidden lg:block absolute -right-20 xl:-right-32 top-1/2 -translate-y-1/2 w-[500px] xl:w-[700px] opacity-10 -z-10"
            aria-hidden="true"
          />

          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-[#635a55] mb-4">
              Vacci<span className="text-[#e37a23]">NATION</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed mb-6">
              Comparing vaccination systems globally
            </p>
            <img
              src={syringe}
              alt=""
              className="w-32 sm:w-48 lg:w-64 xl:w-72 h-auto mx-auto lg:ml-auto lg:mr-0 rotate-180"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
