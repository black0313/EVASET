import React from 'react';
import './PAGANATION.css'
import avatar from '../../../img/Product Avatar.png'

function RenderComponent3({key, data}) {
    const {id, amal,sana,buyurtma,mijoz,phonenumber,baza,status,yetkazishstatus,qolganmiqdor,savdogar} = data;

    return (

        <tr>
            <td className={'border-0 py-3 d-flex thead-padding-left'}>{amal}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{sana}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{buyurtma}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{mijoz}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{phonenumber}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{baza}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{status}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{yetkazishstatus}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{qolganmiqdor}</td>
            <td className={'border-0 py-3 p-2 align-text-bottom'}>{savdogar}</td>
        </tr>


    );
}

export default RenderComponent3;