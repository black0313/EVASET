import React from 'react';
import './PAGANATION.css'
import avatar from '../../../img/Product Avatar.png'

function RenderComponent3({key, data}) {
    const {id, savdonumber,mijoz,qarzmiqdori,amal} = data;

    return (

        <tr>
            <td className={'border-0 py-3 d-flex thead-padding-left'}>{savdonumber}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{mijoz}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{qarzmiqdori}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{amal}</td>
        </tr>


    );
}

export default RenderComponent3;