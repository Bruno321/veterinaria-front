import React from 'react'
import './index.css'
import moment from 'moment/moment';

export const PackageCard = ({data}) => {
    return (
        <div className='packageCard'>
            <p style={{flex:"1"}}>{data.counter}</p>
            <p style={{flex:"3"}}>{data.origin}</p>
            <p style={{flex:"3"}}>{data.destiny}</p>
            <p style={{flex:"1"}}>{moment(data.exitDate).format("Y,M,dddd")}</p>
            <p style={{flex:"1"}}>{data.status===0? "En proceso":"Entregado"}</p>
            <div style={{flex:"1"}} >
                {
                    data.status===0 ?
                        <img
                            src={require('../../../Assets/Icons/pdf_no_clickeable.svg')} 
                            alt={"ReporteNoClickeable"}
                            /> : 
                        <img
                            src={require('../../../Assets/Icons/pdf_clickeable.svg')} 
                            alt={"ReporteClickeable"}
                            />
                }
            </div>
        </div>
    )
}
