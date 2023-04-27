import React, { useState,useEffect } from 'react'

import './index.css'

export const FormInputSerchable = ({data,value,setValue,index,addresses,setAddressLoading}) => {

    const [selected,setSelected] = useState(false)
    const [searchableAddresses,setSearchableAddresses] = useState([...addresses])



    const handleClick = (e) => {
        setSelected(false)
        setAddressLoading(true)
        setValue(index,e.target.lastChild.textContent)
    }

    function findObjectsWithText(arr, searchText) {
        return arr.filter(obj => {
          for (const key in obj) {
            if (obj.name.toLowerCase().includes(searchText.toLowerCase())) {
              return true;
            }
          }
          return false;
        });
      }

    useEffect(()=>{
        if(value.value !==""){
            setSearchableAddresses(findObjectsWithText(addresses, value.value))
        }else {
            setSearchableAddresses([...addresses])
        }
    },[value.value])

    return (
        <div className='formInput' onMouseLeave={(e)=>setSelected(false)}>
            <label>{data.title}</label>
                <input 
                    type={"text"}
                    value={value.value}
                    placeholder={data.placeholder}
                    onChange={(e)=>setValue(index,e.target.value)}
                    // onSelect={(e)=>setSelected(true)}
                    // onClick={(e)=>setSelected(true)}
                    onMouseOver={(e)=>setSelected(true)}
                    // onBlur={(e)=>setAddressLoading(true)}
                />
            {selected ? 
            searchableAddresses.map((e,i)=>{
                return (
                    <div 
                        className='autcomplet-select' 
                        id={e.ID} 
                        key={i}
                        onClick={(e)=>handleClick(e)}
                    >
                        <p>{e.name}</p>
                    </div>
                )
            })
            :
              <></>
            }
        </div>
    )
}
