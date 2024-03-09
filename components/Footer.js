import Image from 'next/image'

const Footer = () => {
    return (
        <section className='lg:mt-24'>
            <div className='relative lg:h-64 h-36'>
                <Image
                    src='/light-footer.png'
                    alt='Footer'
                    fill
                />
                <Image
                    src='/dark-footer.png'
                    alt='Footer'
                    fill
                />
            </div>
        </section>
    )
}

export default Footer
