import Dropdown from "./Dropdown";

const Temperature = () => {

    return (
        <section className='sm:mt-20 mt-14 mx-auto'>
            <div className='flex justify-between'>
                <h2 className='font-abhayaLibre font-bold text-[#003339] text-lg sm:text-3xl mb-4 sm:mb-8'>
                    Temperature
                </h2>
                <Dropdown />
            </div>
        </section>
    )
}

export default Temperature
