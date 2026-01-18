import Button from "./ui/Button";
import InterActiveSpan from "./ui/InterActiveSpan";
import hero1 from "../assets/hero-first-img.png";
import hero2 from "../assets/hero-second-img.png";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center overflow-hidden bg-white">

      {/* Left Floating Image */}
      <img
        src={hero1}
        alt="hero 1"
        className="absolute left-1 top-[53%] md:top-[65%] w-40 md:w-90 -translate-y-1/2 animate-floatLeft 
                   opacity-50 hover:opacity-100 transition hover:scale-105"
      />

      {/* Right Floating Image */}
      <img
        src={hero2}
        alt="hero 2"
        className="absolute right-1 top-[95%] md:top-[90%] w-40 md:w-90 -translate-y-1/2 animate-floatRight 
                   opacity-50 hover:opacity-100 transition hover:scale-105"
      />

      {/* Hero Content */}
      <div className="w-full max-w-7xl px-4 md:px-10 py-16 md:py-24 text-center">
        
        <p className="text-xs mt-4 md:text-sm uppercase tracking-widest text-gray-500 mb-4 md:mb-6">
          Creative Digital Agency
        </p>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight mb-6 md:mb-8">
          We build <br />
          <InterActiveSpan className="text-purple-600 bg-yellow-200 rounded-xl px-4 md:px-6 py-1 md:py-2 shadow-xl mt-2 inline-block">
            Digital
          </InterActiveSpan>
          <br />
          Experiences that inspire
        </h1>

        <p className="max-w-md md:max-w-2xl mx-auto text-gray-600 mb-6 md:mb-10 text-sm md:text-base">
          Abstratto is a creative agency focused on design, animation and technology. We help brands grow through powerful visuals.
        </p>

        <div className="flex justify-center">
          <Button withArrow size="lg"
          className="scale-90 md:scale-100"
          >Get Started</Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
