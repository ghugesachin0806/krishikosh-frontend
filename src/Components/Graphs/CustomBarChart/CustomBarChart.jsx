import React from 'react'
import { ResponsiveContainer, Tooltip, BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts';

const CustomBarChart = ({ cropData, XAxisName = 'name', barData, width="100%", height= 300 }) => {
    return (
        <>
            <ResponsiveContainer width={width} height={height}>
                <BarChart data={cropData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={XAxisName} />
                    <YAxis />
                    <Tooltip
                        formatter={(value, name) => [`₹${value.toLocaleString()}`, name]}
                    />
                    {
                        barData.map((item,index) => (<Bar dataKey={item.dataKey} key={`bar-${index}`} fill={item.fill} name={item.name} />))
                    }
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}

export default CustomBarChart