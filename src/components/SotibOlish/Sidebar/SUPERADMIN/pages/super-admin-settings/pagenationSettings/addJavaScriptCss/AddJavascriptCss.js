import React from 'react'

export default function AddJavascriptCss() {
    return (
        <div>
            <div className='ms-3 me-3'>
                <h5 className='mb-3 text-center'>Pusher Settings</h5>
                <div className="row">
                    <h6>Additional Javascript: </h6>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div className="row mt-5">
                    <h6>Additional Javascript: </h6>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="d-flex justify-content-end" style={{ marginTop: '100px' }}>
                    <button className='btn btn-primary'>Saqlash</button>
                </div>
            </div>

        </div>
    )
}
