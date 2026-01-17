import Button from "./ui/Button"    
import InterActiveSpan from "./ui/InterActiveSpan"

const Hero = () => {
  return (
    <section className=" relative w-full flex justify-center overflow-hidden ">

        <img src="/public/hero-first-img.png" alt="hero image"
         className="absolute left-[1%] top-[60%] w-90 -translate-y-1/2 animate-floatLeft 
         opacity-80 hover:opacity-100 transition hover:scale-105 "
        />

        <img src="/public/hero-second-img.png" alt="hero image second"
         className="absolute right-[1%] top-[85%] w-90 -translate-y-1/2 animate-floatRight 
         opacity-80 hover:opacity-100 transition hover:scale-105 "
        />

        <div className="w-full max-w-7xl px-10 py-16 text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-6">Creative Digital Agency</p>

            <h1 className="text-7xl md:text-6xl font-bold leading-tight mb-8">
                We build 
                <br />

                <InterActiveSpan className="text-purple-600 bg-yellow-200 rounded-xl px-6 py-2 shadow-xl mt-4">
                  Digital
                </InterActiveSpan>

                <br />
                Experiences that inspire
            </h1>

            <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                Abstratto is a creative agency focused on design, animation and 
                technology. We helps brands grow throw powerful visuals.
            </p>

            <div className='flex justify-center'>
                <Button withArrow size='lg'>Get Started</Button>
            </div>
        </div>
    </section>
  )
}

export default Hero