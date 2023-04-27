import React from 'react'

import { WarningAlert } from '../Alerts/WarningAlert'
import { FormInput } from '../FormInput'
import { FormInputSelect } from '../FormInputSelect'
import { FormInputSerchable } from '../FormInputSerchable'

import './index.css'

export const Form = ({data,values,setValue,addresses,setAddressLoading}) => {

    return (
        <div className='form'>
            <div className='form-title'>{data.title}</div>
            <WarningAlert/>
            <div className='form-iputs-container'>
                {data.inputs.map((element,i)=>{
                    if(element.inputType==="select"){
                        return (
                            <FormInputSelect 
                                data={element} 
                                value={values[i]} 
                                setValue={setValue}
                                index={i}
                                key={i}
                            />
                        ) 
                    } else if(element.inputType==="text"){
                        return (
                            <FormInput 
                                data={element} 
                                value={values[i]} 
                                setValue={setValue}
                                index={i}
                                key={i}
                            />
                        )
                    } else if (element.inputType==="serchable"){
                        return (
                            <FormInputSerchable
                                data={element} 
                                value={values[i]} 
                                setValue={setValue}
                                index={i}
                                key={i}
                                addresses={addresses}
                                setAddressLoading={setAddressLoading}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}
