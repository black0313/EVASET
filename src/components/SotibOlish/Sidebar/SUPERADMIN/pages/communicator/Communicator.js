import React from 'react'
import './communicator.css'
import { Editor } from '@tinymce/tinymce-react'

export default function Communicator() {
	return (
		<div className='containerCommunicator'>
			<h4 className='text-center mb-3'>Application Settings</h4>
			<div className="row">
				<h5 className=''>Compose Message</h5>
				<div className="col-md-12 mb-4 mt-3">
					<h6>Recipients:</h6>
					<div>
						<button className='belgilashBtn'>Barchasini belgilash</button>
						<button className='belgilashBtn'>Belgianganlarni qaytarish</button>
					</div>
					<input type="text" className='form-control' />
				</div>
				<div className="col-md-12 mb-4">
					<h6>Subject:</h6>
					<input type="text" className='form-control' />
				</div>
			</div>

			<div className="row mb-4 mt-4">
				<div className="col-md-12">
					<Editor />
				</div>
			</div>

			<div className="d-flex justify-content-end">
				<button className='btn btn-primary'>Send</button>
			</div>
		
			<hr />
			<div className="rowStyleCommun">
				<h5>Message History</h5>

				<div className="izlashCommun">
					<div className="izlashBox1">
						<p>Ko'rsatildi</p>
						<select name="" id="">
							<option value="">25</option>
							<option value="">50</option>
						</select>
					</div>
					<div className="izlashBox2">
						<input type="text" placeholder='Izlash...' />
					</div>
				</div>
				<div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
					<table className='table  table-striped table-bordered mt-4'>
						<thead>
							<tr>
								<th>Subject</th>
								<th>Massages</th>
								<th>Sana</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>h</td>
								<td>h</td>
								<td>h</td>
							</tr>
						</tbody>
					</table>
					<button className={'btn btn-outline-danger form-control'}>Ko`proq ko`rish</button>
				</div>

			</div>
		</div>
	)
}
