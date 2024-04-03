import { useState } from "react";

const Navbar = () => {
    const [style,setStyle] = useState("md:flex md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0 navigation-menu hidden")
    const [isClose,setIsClose]= useState(1)
    const handleChange = () =>{
        if(isClose){
            setStyle("md:flex md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0 navigation-menu")
            setIsClose(0)
        }
        else{
            setStyle("md:flex md:flex-row flex-col items-center justify-start md:space-x-1 navigation-menu pb-3 md:pb-0 navigation-menu hidden")
            setIsClose(1)
        }
    }
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 md:flex items-center gap-6">
                <div className="flex items-center justify-between md:w-auto w-full">
                    <a href="#" className="flex items-center py-5 px-2 text-white flex-1">
                        <span className="font-bold">YourBrand</span>
                    </a>
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={handleChange}>
                            <img src="vite.svg" alt="svg" />
                        </button>
                    </div>
                </div>
                <div className={style}>
                    <a href="#" className="py-2 px-3 block">Home</a>
                    <a href="#" className="py-2 px-3 block">About</a>
                    <a href="#" className="py-2 px-3 block">Gallery</a>
                    <a href="#" className="py-2 px-3 block">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
