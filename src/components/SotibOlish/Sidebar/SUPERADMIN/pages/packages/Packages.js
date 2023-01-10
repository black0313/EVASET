import React from 'react'
import './packages.css'
import Delet from '../../../../../../img/icons-delete.png'
import Editt from '../../../../../../img/icons-edit.png'
import { Link } from 'react-router-dom'

export default function Packages() {
	return (
		<div className='PackagesContainer'>
			<div className="packageContainer-item">
				<h4>Packages All Packages</h4>
				<Link to={'/headerthird/superadmin/paskages/addpackage'}><button className='btn btn-primary mt-sm-2 mt-md-4 '>Qo'shish</button></Link>
			</div>
			<div className="cardBlock mb-5">
				<div className="card1 m-2">
					<div className="cardBox d-block text-center">
						<h5 className=''>Doimiy</h5>
						<div className="d-flex justify-content-center align-items-center mb-4">
							<div className='activButton'>Active</div>
							<img src={Editt} alt="" className='editImg' />
							<img src={Delet} alt="" className='editImg' />
						</div>
						<hr className='mb-4'/>
						<p>Unlimited Users</p>
						<p>Unlimited Users</p>
						<p>Unlimited Users</p>
						<h4 className='mt-4'>Free for 10 Yillar</h4>
						<hr className='mt-4'/>
						<p className='mt-4'>Doimiyga ulangan</p>
					</div>
				</div>
			</div>
		</div>
	)
}
