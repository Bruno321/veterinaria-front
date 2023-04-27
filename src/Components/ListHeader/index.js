import React from 'react'
import './index.css'

export const ListHeader = ({data}) => {
    return (
        <div className='listHeader'>
            <div className='listHeader-container'>
                {data.map(element => {
                    return(
                        <p key={element.title} style={{flex:`${element.weight}`}} >{element.title}</p>
                    )
                })}
            </div>
            <div className='separator'></div>
        </div>
    )
}
