import { format } from 'date-fns'
import Loader from './Loader';
import Image from 'next/image';

const Forecast = ({ forecast }) => {

    let hours = forecast.days ? forecast?.days[0]?.hours.reverse() : []
    hours.length = 5

    return (
        forecast.days ?
            <section className='sm:mt-20 mt-14 mx-auto'>
                <div className='bg-[#003339] w-full h-fit py-4 sm:px-8 px-6 rounded-2xl text-white font-abhayaLibre sm:text-xl text-sm font-bold'>
                    <div className='flex items-center justify-between'>
                        {hours.map((hour, index) => (
                            <div key={index} className='flex flex-col items-center justify-between gap-2'>
                                <p>{format(new Date('1970-01-19T' + hour.datetime), "HH:mm")}</p>
                                <div className='relative h-8 w-8 lg:h-12 lg:w-12'>
                                    <Image
                                        src={`/icons/${hour.icon}.png`}
                                        alt='weather'
                                        fill
                                        className='object-contain'
                                    />
                                </div>
                                <p>{hour.temp}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            : <Loader />
    )
}

export default Forecast
