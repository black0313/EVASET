import React from 'react'
import './backupSettings.css'

export default function BaccupSettings() {
	return (
		<div className='ms-3 me-3'>
			<h5 className='mb-3 text-center'>Backup Settings</h5>
			<div className="row">
				<div className="col-md-4 mb-4">
					<h6>Backup Disk:</h6>
					<select name="" id="" className='form-control' style={{ cursor: 'pointer' }}>
						<option value="">Tanlang</option>
					</select>
				</div>
			</div>
			<div className="d-flex justify-content-end" style={{ marginTop: '200px' }}>
				<button className='btn btn-primary'>Saqlash</button>
			</div>
		</div>
	)
}
