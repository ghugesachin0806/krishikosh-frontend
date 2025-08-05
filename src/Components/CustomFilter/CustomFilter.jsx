import React from 'react'
import './CustomFilter.css'
import { ListFilter } from 'lucide-react'

const CustomFilter = ({ list, name = 'filter', id = 'filter-id' }) => {
    return (
        <div className='custom-filter'>
            <ListFilter className='custom-filter-icon'/>
            <select className='custom-filter-select' name={name} id={id}>
                {list.map((item,index)=>(<option key={`option-${index}`} value={item.value}>{item.name}</option>))}
            </select>
        </div>
    )
}

export default CustomFilter