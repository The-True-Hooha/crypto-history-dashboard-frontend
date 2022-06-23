import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Charts from './Charts';
import axios from "axios";

const ChartsContainer = ({slug}) => {
    const router = useRouter();
    const [cryptoHistory, setCryptoHistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = axios.get(`http://localhost:8080/api/v1/crypto-dashboard/get-coins/${slug}/24h`);
            setCryptoHistory(result.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    const fetchTimeHistory = async (e, timePeriod) => {
        e.preventDefault();
        setLoading(true);
        const result = await axios.ge(`http://localhost:8080/api/v1/crypto-dashboard/${slug}/${timePeriod}`)
        setCryptoHistory(result.data);
        setLoading(false);
    }

    return (
        <div className='flex flex-col max-w-6xl p-6 mt-4 h-screen mx-auto'>
            <div className='flex space-x-4'>
                <button onClick={() => {
                    router.push("/");
                }}
                type='button'
                className='text-green-700 border border-green-700 hover:bg-green-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:focus:ring-green-800'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className='h-6 w-6'
                         fill='none'
                         viewBox='0 0 24 24'
                         stroke='currentColor'
                         strokeWidth={2}>
                        <path
                            stroke-strokeLinecap='round'
                            stroke-strokeLinejoin='round'
                            />
                    </svg>
                </button>
                <h2 className='font-extrabold text-4xl text-gray-800'>{slug}</h2>
            </div>
            <div className='flex mx-auto'>
                <Charts cryptoHistory={cryptoHistory}/>
            </div>
            <div className='flex mx-auto mt-12'>
                <button className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900'></button>
            </div>
        </div>
    );
}

export default ChartsContainer;