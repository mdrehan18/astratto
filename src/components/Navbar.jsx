import Button from "./ui/Button"
const Navbar = () => {
  return (


    <nav className='w-full flex justify-center'>
        <div className='w-full max-w-7xl flex justify-between items-center px-10 py-2 border-b-2 border-gray-300 font-semibold'>
            <div className='flex gap-4'>
                <h2>Services</h2>
                <h2>Work</h2>
                <h2>About</h2>
            </div>

            <div className="flex justify-center items-center">
                <img src="/public/abstratto-header logo.png" alt="logo"
                 className="w-12 object-contain"
                />
                <h1 className="text-[1.3rem]">Astratto</h1>
            </div>

            <div className='flex  gap-8 items-center'>
                <h2>Carrier</h2>

                <Button
                    as="a"
                    href="#contact"
                    withArrow
                    size="sm"
                    onClick={(e) => {
                        e.preventDefault();
                        document
                        .getElementById("contact")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                    >
                    Contact Us
                </Button>

            </div>
        </div>







        {/* <div>
            <Link>Services</Link>
            <Link>Work</Link>
            <Link>About</Link>
        </div>

        <div>
            <i className="fas fa-bars"></i>
            <h2>Astratto</h2>
        </div>

        <div>
            <Link>Carrier</Link>
            <button>Contact Us</button>
        </div> */}
        
    </nav>
  )
}

export default Navbar