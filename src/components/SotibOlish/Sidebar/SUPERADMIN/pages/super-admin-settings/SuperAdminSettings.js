import React from 'react'
import { useState } from 'react';
import './superadminsettings.css'
import { Link,Switch,Route } from 'react-router-dom';
import AdminSettings from './pagenationSettings/adminSettings/AdminSettings';

export default function SuperAdminSettings() {

	const [clickButton, setClickButton] = useState('buttonsStyle')


	function changeButtonStyle() {
		setClickButton('clicButtonStyle')
	}

	return (
		<div className='supAdmSetContStyle'>
			<div className='textHeaderSuprAdmin'>
				<h4>Super Admin Settings</h4>
				<select name="" id="" className='selectStyl'>
					<option value="">Tanlang</option>
				</select>
			</div>

			<div className="settingsBlock">
				<div className="settinButtonsBox">
					<Link to={'/headerthird/superadmin/superadminsettings/adminsettings'}><button id='bs' className={'buttonsStyle'} >Super Admin Settings</button></Link>
					<Link><button className={'buttonsStyle'} >Application Settings</button></Link>
					<Link><button className={'buttonsStyle'} >Email SMPT Settings</button></Link>
					<Link><button className={'buttonsStyle'} > Payment Gateways</button></Link>
					<Link><button className={'buttonsStyle'} > Backup</button></Link>
					<Link><button className={'buttonsStyle'} > Cron Jobs</button></Link>
					<Link><button className={'buttonsStyle'} >Pusher Settings</button></Link>
					<Link><button className={'buttonsStyle'} >Additional Javascript and CSS</button></Link>
				</div>
				<div className="settinPages">
					<Switch>
						<Route path={'/headerthird/superadmin/superadminsettings/adminsettings'} component={AdminSettings}/>
					</Switch>
				</div>
			</div>

		</div>
	)
}
