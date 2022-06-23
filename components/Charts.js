import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = (cryptoHistory) => {
    return(
        <AreaChart width={900} height={500} data={cryptoHistory} margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}>
            <defs>
                <linearGradient id='colorUv' xl='0' y1={0} x2={0} y2={1}>
                    <stop offset="5%" stopColor='#8884d8' stopOpacity={0.8}/>
                    <stop offset="95%" stopColor='#8884d8' stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="timestamp" angle={35}/>
            <YAxis/>
            <Tooltip/>
            <Area type={monotone} dataKey="value" stroke='#8884d8' fillOpacity={1} fill='url{#colorUv}' />
        </AreaChart>
    )
}

export default Charts;