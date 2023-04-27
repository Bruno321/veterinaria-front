import React from 'react'

import './index.css'

import Select from 'react-select'

const options = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9'},
    { value: 'blue', label: 'Blue', color: '#0052CC'},
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630'},
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];

export const FormInputSelect = ({data,value,setValue,index}) => {
    return (
        <div className='formInput'>
            <label>{data.title}</label>
            {typeof(value.value)==="string"  ? 
                <input 
                    type={"text"}
                    value={value.value}
                    placeholder={data.placeholder}
                    onChange={(e)=>setValue(index,e.target.value)}
                />
                :
                <Select 
                    className='formInput-select'
                    // value={value.value}
                    // onChange={(e)=>setValue(index,e.target.value)}
                    placeholder={data.placeholder}
                    isClearable={true}
                    options={options}
                />
            }
                
        </div>
    )
}
