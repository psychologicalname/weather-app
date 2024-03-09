import { IoMdClose } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

import LiveBtn from "./LiveBtn";

const Drawer = ({ currentLocation, weatherData, isOpen, setIsOpen }) => {

    return (
        <main className={`fixed overflow-hidden z-50 h-screen bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${isOpen ? "transition-opacity opacity-100 duration-500 -translate-x-0" : "transition-all delay-400 duration-500 opacity-0 -translate-x-full"}`}>
            <section className={`w-screen max-w-lg left-0 absolute bg-[url('/Bitmap.png')] h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${isOpen ? "-translate-x-0" : "-translate-x-full"}`}>
                <article className="relative w-screen max-w-lg p-10 overflow-y-scroll h-full text-white flex flex-col">
                    <div className="flex justify-between items-center">
                        <IoMdClose
                            className="sm:text-3xl text-xl cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                        <LiveBtn />
                    </div>

                    <div className="flex flex-col my-52">
                        <div className="flex gap-2 items-center">
                            <FaLocationDot className="sm:text-lg" />
                            <p className="uppercase font-abhayaLibre font-bold text-sm sm:text-lg">{currentLocation}</p>
                        </div>
                        <h1 className="font-abhayaLibre font-bold text-5xl sm:text-7xl mt-4">
                            {weatherData?.name}, {weatherData.sys?.country}
                        </h1>
                    </div>
                </article>
            </section>
            <section
                className="w-screen h-full cursor-pointer"
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
