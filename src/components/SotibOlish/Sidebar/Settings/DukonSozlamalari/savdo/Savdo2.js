import './savdo.css'

function Savdo2(){
    return(
        <div className={'savdoContener'}>
             <h3 className='text-center pb-3'>Savdo sozlamalari</h3>
            <div className="row mb-4">
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l1'}>Savdo standart soliq:</label>
                    <input type="text" className={'form-control'}/>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l2'}>Savdo standart soliq:</label>
                    <select name="" id={'l2'} className={'form-control'}>
                        <option value="#">Soliq miqdori(foizda)</option>
                        <option value="#">Mavjud emas</option>
                    </select>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l3'}>Hodimni savdodan ulushi:</label>
                    <select name="" id={'l3'} className={'form-control'}>
                        <option value="#">Hodimni savdodan ulushi</option>
                        <option value="#">Barcha hodimlarga</option>
                    </select>
                </div>
            </div>
            <div className="row mb-4">
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l1'}>cmmsn_calculation_type:</label>
                    <input type="text" className={'form-control'}/>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l2'}>Maxsulotlarni sotish usuli:</label>
                    <select name="" id={'l2'} className={'form-control'}>
                        <option value="#">Agar mavjud bo`lsa</option>
                        <option value="#">Har bir yangi qator</option>
                    </select>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l3'}>To'lovni yaxlitlash usuli:</label>
                    <select name="" id={'l3'} className={'form-control'}>
                        <option value="#">Mavjud emas</option>
                        <option value="#">To`liq raqam bilan</option>
                    </select>
                </div>
            </div>
            <div className="row mb-4 ">
                <div className='col-4 mb-3 col-sm-12 d-flex justify-content-around align-content-center'>
                    <label htmlFor={'l4'}>Sotish narxidan past sotmaslik</label>
                    <input type="checkbox" id={'l4'} style={{width:'20px',height:'20px'}}/>
                </div>
                <div className='col-4 mb-3 col-sm-12  d-flex justify-content-around align-content-center'>
                    <label htmlFor={'l5'}>Maxsulot tugasa ham sotish</label>
                    <input type="checkbox" id={'l5'} style={{width:'20px',height:'20px'}}/>
                </div>
                <div className='col-4 mb-3 col-sm-12  d-flex justify-content-around align-content-center'>
                    <label htmlFor={'l6'}>Sotish buyurtmasini yoqish</label>
                    <input type="checkbox" id={'l6'} style={{width:'20px',height:'20px'}}/>
                </div>
            </div>
        </div>
    )
}
export default Savdo2