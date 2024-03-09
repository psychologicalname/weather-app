'use client'

import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosSearch, IoMdClose } from "react-icons/io";

import Drawer from "./Drawer";

const Navbar = ({ currentLocation, weatherData, searchText, setSearchText }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleSearch, setToggleSearch] = useState(false);

    return (
        <nav className="fixed z-20 bg-white/20 backdrop-blur w-full mb-6 sm:mb-16 py-4 sm:px-24 px-6">

            {/* Mobile Navigation */}
            <div className="sm:hidden flex justify-between items-center">
                <BiMenuAltLeft
                    className="text-3xl cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
                <Drawer currentLocation={currentLocation} weatherData={weatherData} isOpen={isOpen} setIsOpen={setIsOpen} />
                <IoIosSearch
                    className={`${toggleSearch ? 'hidden' : 'text-3xl'}`}
                    onClick={() => setToggleSearch((prev) => !prev)}
                />
                {toggleSearch && (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for cities"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-48 rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
                        />
                        <button onClick={() => setToggleSearch(false)} type="button">
                            <IoMdClose className="absolute inline right-2 top-3" />
                        </button>
                    </div>
                )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex justify-between items-center">
                <BiMenuAltLeft
                    className="text-3xl cursor-pointer"
                    onClick={() => setIsOpen(true)}
                />
                <Drawer currentLocation={currentLocation} weatherData={weatherData} isOpen={isOpen} setIsOpen={setIsOpen} />
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search for cities"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-72 rounded-lg border border-gray-300 bg-white py-2.5 px-4 text-sm shadow-lg focus:border-black focus:outline-none focus:ring-0"
                    />
                    <button onClick={() => setToggleSearch(false)} type="button">
                        <IoIosSearch className="text-2xl absolute inline right-2 top-2" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
