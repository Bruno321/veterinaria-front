import React from 'react'

import './index.css'

export const FormInput = ({data,value,setValue,index}) => {
    return (
        <div className='formInput'>
            <label>{data.title}</label>
                <input 
                    type={"text"}
                    value={value.value}
                    placeholder={data.placeholder}
                    onChange={(e)=>setValue(index,e.target.value)}
                />
        </div>
    )
}
