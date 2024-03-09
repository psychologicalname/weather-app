import Image from 'next/image';
import Loader from './Loader';
import LiveBtn from './LiveBtn';

const Hero = ({ weatherData }) => {

    const date = new Date();
    const dateString = date.toDateString();
    const newDateString = dateString.replace(/^\S+\s/, '');
    const finalDateString = newDateString.replace(/(?<=\d) /, ", ");

    return (
        weatherData.weather ?
            <section className='sm:mt-32 mt-24 flex items-center justify-between gap-10'>
                <div className='flex flex-col max-w-md gap-1 items-start justify-between'>
                    <h1 className='font-abhayaLibre font-bold text-2xl md:text-5xl lg:text-7xl'>
                        {weatherData?.name}, {weatherData.sys?.country}
                    </h1>
                    <p className='font-abhayaLibre font-bold text-sm sm:text-2xl text-gray-400'>
                        {finalDateString}
                    </p>
                    <div className='flex space-x-1 items-center font-abhayaLibre font-bold text-sm sm:text-2xl text-[#057BFF]'>
                        <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt='weather' className='h-8 w-8 lg:h-16 lg:w-16' />
                        <p>{weatherData?.weather[0].main}</p>
                    </div>
                </div>
                <div className='relative'>
                    <Image
                        src='/Bitmap.png'
                        alt='city'
                        className='object-cover object-bottom sm:h-48 h-24 sm:w-96 w-40 rounded-xl'
                        width={400}
                        height={100}
                    />
                    <div className='absolute bottom-2 right-2'>
                        <LiveBtn />
                    </div>
                </div>
            </section>
            : <Loader />
    )
}

export default Hero
