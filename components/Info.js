import Loader from "./Loader"

const Info = ({ weatherData }) => {

    return (
        weatherData.weather ?
            <section className='sm:mt-20 mt-14 mx-auto'>
                <div className='border-y border-gray-200 h-fit w-full py-8 px-2'>
                    <h2 className='font-abhayaLibre font-bold text-[#003339] text-lg sm:text-3xl mb-4 sm:mb-8'>
                        Additional Info
                    </h2>
                    <div className='flex justify-between items-center font-abhayaLibre'>
                        <div className='flex flex-col justify-between items-start gap-2'>
                            <p className='text-[#96969A] text-sm sm:text-xl'>Pressure</p>
                            <p className='font-bold text-base sm:text-xl text-[#003339]'>
                                {weatherData?.main.pressure}
                            </p>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-2'>
                            <p className='text-[#96969A] text-sm sm:text-xl'>Humidity</p>
                            <p className='font-bold text-base sm:text-xl text-[#003339]'>
                                {weatherData?.main.humidity}%
                            </p>
                        </div>
                        <div className='flex flex-col justify-between items-start gap-2'>
                            <p className='text-[#96969A] text-sm sm:text-xl'>Windy</p>
                            <p className='font-bold text-base sm:text-xl text-[#003339]'>
                                {weatherData?.wind.speed} km/h
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            : <Loader />
    )
}

export default Info
