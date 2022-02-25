import './qisqaQoshimchalar.css'

export default function QisqaQoshimcha(){
    return(
        <div className={'qisqaCont'}>
             <h3 className='text-center pb-3'>Qisqa qo'shimchalar sozlamalari</h3>
            <div className="row">
                <div className="col-4 col-md-12 mb-3">
                    <label htmlFor={'purcase'}>Purchase</label>
                    <input type="text" className={'form-control mb-4'} id={'purcase'}/>

                    <label htmlFor={'bazadan2'}>Bazadan bazaga surish miqdori:</label>
                    <input type="text" className={'form-control mb-4'} id={'bazadan2'}/>

                    <label htmlFor={'bazadan3'}>Xarajatlar:</label>
                    <input type="text" className={'form-control mb-4'} id={'bazadan3'}/>

                    <label htmlFor={'bazadan4'}>Savdo uchun to`lov:</label>
                    <input type="text" className={'form-control mb-4'} id={'bazadan4'}/>
                </div>
                <div className="col-4 col-md-12 mb-3">
                    <label htmlFor={'xq'}>Xaridni qaytarish</label>
                    <input type="text" className={'form-control mb-4'} id={'xq'}/>

                    <label htmlFor={'mb'}>Malumotlar bazasi:</label>
                    <input type="text" className={'form-control mb-4'} id={'mb'}/>

                    <label htmlFor={'hk'}>Xamkorlar:</label>
                    <input type="text" className={'form-control mb-4'} id={'hk'}/>

                    <label htmlFor={'xt'}>Xarajatni to`lovi:</label>
                    <input type="text" className={'form-control mb-4'} id={'xt'}/>
                </div>
                <div className="col-4 col-md-12 mb-3">
                    <label htmlFor={'xq2'}>Xaridlar</label>
                    <input type="text" className={'form-control mb-4'} id={'xq2'}/>

                    <label htmlFor={'mb2'}>Qaytarilgan savdolar:</label>
                    <input type="text" className={'form-control mb-4'} id={'mb2'}/>

                    <label htmlFor={'hk2'}>Xarid un tulov:</label>
                    <input type="text" className={'form-control mb-4'} id={'hk2'}/>

                    <label htmlFor={'xt2'}>Baza:</label>
                    <input type="text" className={'form-control mb-4'} id={'xt2'}/>
                </div>
            </div>
        </div>
    )
}