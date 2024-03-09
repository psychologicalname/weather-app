const Loader = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-current rounded-full';

    return (
        <div className="flex min-h-80 flex-col items-center justify-between sm:px-24 px-6 translate-y-[50%]">
            <div className='flex'>
                <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                <div
                    className={`${circleCommonClasses} mr-1 animate-bounce200`}
                ></div>
                <div className={`${circleCommonClasses} animate-bounce400`}></div>
            </div>
        </div>
    );
};

export default Loader;