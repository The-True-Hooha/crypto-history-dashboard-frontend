import React from 'react';

const HeroSection = () => {
    return(
        <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto'>
          <div className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16'>
            <div className='flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h2 className='text-3l lg:text-4xl xl:text-5xl font-bold text-black leading-normal'>
                Get daily crypto market results at a quick glance
            </h2>
            <p className='text-black mt-8 mb-6'>
                We provide a free and credible list of market rates for all your needs in
                a quick and easy layout. We also have some interesting features building up.
            </p>
            </div>
          </div>
        </div>
    )
}

export default HeroSection;