'use client'

import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <div className="font-abhayaLibre font-bold text-[#003339]">
            <button
                type="button"
                className="p-3 focus:outline-none rounded-lg text-sm sm:text-base inline-flex items-center justify-between gap-4 border border-gray-700"
                onClick={() => setToggleDropdown(!toggleDropdown)}
            >
                <span>Last month</span>
                <GoChevronDown />
            </button>
            <div className="bg-gray-100 rounded-lg z-50 mt-2">
                {toggleDropdown && (
                    Array(4).fill().map((index) => (
                        <div key={index} className="px-4 py-2">
                            <ul>
                                <li className="cursor-pointer" onClick={() => setToggleDropdown(false)}>
                                    This month
                                </li>
                            </ul>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Dropdown



