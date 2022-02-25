export default function SozlamalarBtn(){
    return(
        <div className={'col-md-10 mt-5'}>
            <h5>Business Location Settings-Instrumentlar</h5><br/>
            Receipt Settings All receipt related settings for this location
            <div className="col-md-12 d-flex mt-4 justify-content-between">
                <div className="col-md-6">
                    <label htmlFor={'auto'}>Auto print invoice after finalizing:</label>
                    <select name="" id={'auto'} className={'form-control'}>
                        <option value="#">Ha</option>
                        <option value="#">Yo`q</option>
                    </select>
                    <label htmlFor={'auto2'} className={'mt-3'}>Xisob kitob oynasi</label>
                    <select name="" id={'auto2'} className={'form-control'}>
                        <option value="#">Default</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor={'auto3'}>lang_v1.browser_based_printing</label>
                    <select name="" id={'auto3'} className={'form-control'}>
                        <option value="#">lang_v1.browser_based_printing</option>
                        <option value="#">lang_v1.configured_printer</option>
                    </select>
                    <label htmlFor={'auto4'} className={'mt-3'}>Xisob faktura sxemasi</label>
                    <select name="" id={'auto4'} className={'form-control'}>
                        <option value="#">Default</option>
                    </select>
                </div>
            </div>
            <button className={'mt-4 btn btn-outline-primary'}>Yangilash</button>
        </div>
    )
}