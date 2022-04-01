import React from 'react';
import './PAGANATION.css'
import avatar from '../../../img/Product Avatar.png'

function RenderComponent3({key, data}) {


    return (

        <tr>
            {/*{*/}
            {/*    SavdoQoshishReducer.savdolar.filter(val=>val.loan>0) .map(item=><tr key={item.id}>*/}
            {/*        <td>{item.trader.id}</td>*/}
            {/*        <td>{item.customer.name}</td>*/}
            {/*        <td>{item.loan}</td>*/}
            {/*        <td>*/}
            {/*            {*/}
            {/*                item.payDate*/}
            {/*            }*/}
            {/*        </td>*/}
            {/*    </tr>)*/}
            {/*}*/}
            <td className={'border-0 py-3 d-flex thead-padding-left'}>{data.trader.id}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{data.customer.name}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{data.loan}</td>
            {/*<td className={'border-0 py-3 p-2 align-text-bottom'}></td>*/}
        </tr>


    );
}

export default RenderComponent3;