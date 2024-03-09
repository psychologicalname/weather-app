'use client'

import { useRouter } from "next/navigation"

const LiveBtn = () => {
    const router = useRouter();

    const handleClick = () => {
        router.refresh();
    }

    return (
        <button className='bg-[#FF2D55] rounded-lg sm:px-6 sm:py-2 px-3 py-1 text-xs sm:text-base font-bold font-abhayaLibre uppercase text-white' onClick={handleClick}>
            Live
        </button>
    )
}

export default LiveBtn
