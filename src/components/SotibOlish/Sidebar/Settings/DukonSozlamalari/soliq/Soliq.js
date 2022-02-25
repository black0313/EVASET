import './soliq.css'


function Soliq(){
    return(
            <div className="soliqCont">
                    <h3 className='text-center pb-3'>Soliq sozlamalari</h3>
                <div className="row">

                    <div className='col-4 mb-3 col-sm-12'>
                        <label htmlFor={'soliqnomi'}>Soliq nomi</label>
                        <input type="text" className={'form-control'} id={'soliqnomi'}/>
                    </div>
                    <div className='col-4 mb-3 col-sm-12'>
                        <label htmlFor={'soliqnomi2'}>Tartib raqami</label>
                        <input type="text" className={'form-control'} id={'soliqnomi2'}/>
                    </div>
                    <div className='col-4 mb-3 col-sm-12'>
                        <label htmlFor={'soliqnomi3'} placeholder={'Gst / Vat / Other'}>Soliq nomi</label>
                        <input type="text" className={'form-control'} id={'soliqnomi3'}/>
                    </div>
                </div>

                <div className="row">
                    <div className='col-4 mb-3 col-sm-12'>
                        <label htmlFor={'tartib'}>Tartib raqami</label>
                        <input type="text" className={'form-control'} id={'tartib'}/>
                    </div>
                    <div className={'col-4 mb-3 col-sm-12'}>
                        <label  className='d-block' htmlFor={'sot'}>Sotib va sotishda ichki soliq</label>
                        <input  type="checkbox" id={'sot'} className='check'/>
                    </div>
                </div>

            </div>
    )
}
export default Soliq