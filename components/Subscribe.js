import React from 'react';

const Subscribe = () => {
    return (
        <div className='reactive '>
            <div className='bg-green-500 shadow-lg px-[8px] md:px-[120px] py-[30px]'>
                <div className='text-left w-10/12 sm:w-7/12 lg:w-5/12 mb:6 sm:mb-0'>
                    <h5 className=' text-black text-xl px-10 sm:text-2xl font-bold lg:text-3xl leading-relaxed'>
                        Join Our Subscription List
                    </h5>
                    <p className='md:px-[40px] mt-2 font-semibold '> Subscribe with us to enjoy our amazing offers today</p>
                    <div className='md:px-[40px]'>
                        <button className='lg:py-3 lg:px-7 mt-3 text-white font-bold uppercase rounded-lg bg-green-700 hover:shadow-black-md transition-all outline'> Get Started </button>
                    </div>
                </div>
            </div>
        </div> 
    )

}

export default Subscribe;