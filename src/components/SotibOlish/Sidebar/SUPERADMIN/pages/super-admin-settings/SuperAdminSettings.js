import React from 'react'
import { useState } from 'react';
import './superadminsettings.css'
import { Link,Switch,Route } from 'react-router-dom';
import AdminSettings from './pagenationSettings/adminSettings/AdminSettings';
import ApplicationSettings from './pagenationSettings/applicationSettings/ApplicationSettings';
import EmailSettings from './pagenationSettings/emailSettings/EmailSettings'
import PaymentSettings from './pagenationSettings/paymentSettings/PaymentSettings'
import BaccupSettings from './pagenationSettings/baccupSettings/BaccupSettings'
import CronSettings from './pagenationSettings/cronSettings/CronSettings'
import PusherSettings from './pagenationSettings/pusherSettings/PusherSettings'
import AddJavascriptCss from './pagenationSettings/addJavaScriptCss/AddJavascriptCss'


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
					<Link to={'/headerthird/superadmin/superadminsettings/applicationSettings'}><button className={'buttonsStyle'} >Application Settings</button></Link>
					<Link to={'/headerthird/superadmin/superadminsettings/emailsettings'}><button className={'buttonsStyle'} >Email SMPT Settings</button></Link>
					<Link to={'/headerthird/superadmin/superadminsettings/paymentsettings'}><button className={'buttonsStyle'} > Payment Gateways</button></Link>
					<Link to={'/headerthird/superadmin/superadminsettings/backup'}><button className={'buttonsStyle'} > Backup</button></Link>
					<Link to={'/headerthird/superadmin/superadminsettings/cronsettings'}><button className={'buttonsStyle'} > Cron Jobs</button></Link>
					<Link to={'/headerthird/superadmin/superadminsettings/pushersettings'}><button className={'buttonsStyle'} >Pusher Settings</button></Link>
					<Link to={'/headerthird/superadmin/superadminsettings/addjavascriptcss'}><button className={'buttonsStyle'} >Additional Javascript and CSS</button></Link>
				</div>
				<div className="settinPages container">
					<Switch>
						<Route path={'/headerthird/superadmin/superadminsettings/adminsettings'} component={AdminSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/applicationSettings'} component={ApplicationSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/emailsettings'} component={EmailSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/paymentsettings'} component={PaymentSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/backup'} component={BaccupSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/cronsettings'} component={CronSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/pushersettings'} component={PusherSettings}/>
						<Route path={'/headerthird/superadmin/superadminsettings/addjavascriptcss'} component={AddJavascriptCss}/>
					</Switch>
				</div>
			</div>

		</div>
	)
}