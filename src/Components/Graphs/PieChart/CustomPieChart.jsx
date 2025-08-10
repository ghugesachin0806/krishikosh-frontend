import React from 'react'
import { COLORS } from '../../../Utils/DummyData'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const CustomPieChart = ({ cropData, dataKeyName, labelName = 'name', outerRadius, width = "100%", height = 300 }) => {

    return (
        <>
            <ResponsiveContainer width={width} height={height}>
                <PieChart>
                    <Pie
                        data={cropData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ labelName, percent }) => `${labelName} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={outerRadius}
                        fill="#8884d8"
                        dataKey={dataKeyName}
                    >
                        {cropData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}

export default CustomPieChart