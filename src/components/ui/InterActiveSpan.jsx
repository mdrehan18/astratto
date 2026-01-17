import { useState, useEffect } from "react"

const InterActiveSpan = ({children, className = ""}) => {

    const [rotate, setRotate] = useState(4)

    useEffect(()=> {
        const handleMouseMove = (e) => {
            const centerX = window.innerWidth / 2
            const deltaX = e.clientX - centerX;

            const newRotate = 4 + (deltaX * 0.02);
            setRotate(newRotate); 
        };

        window.addEventListener("mousemove", handleMouseMove);
        return ()=> {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, []);

  return (
    <span
     className={` inline-block ${className} transition-transform duration-150`}
     style={{ transform: `rotate(${rotate}deg) scale(1.10)` }}
    >
      {children}
    </span>
  )
}

export default InterActiveSpan