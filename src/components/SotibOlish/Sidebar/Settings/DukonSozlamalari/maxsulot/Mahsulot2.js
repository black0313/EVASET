import './maxsult.css'
import {maxsulot} from 'react'

function Mahsulot2(){
    return(
        <div className={'MaxsulotCont'}>
             <h3 className='text-center pb-3'>Mahsulot sozlamalari</h3>
            <div className="row mb-4">
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'a'}>SKU prefix:</label>
                    <input type="text" className={'form-control'} id={'a'}/>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'a2'}>Yaroqlilik muddati:</label>
                    <select name="" id={'a2'} className={'form-control'}>
                        <option value="#">Faqat amal qo`shish muddati</option>
                        <option value="#">Ishlab chiqarish sanasi va amal qilish muddati</option>
                    </select>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'a3'}>Mahsulotlarni amal qilish muddati:</label>
                    <select name="" id={'a3'} className={'form-control'}>
                        <option value="">Belgilangan kundan oldin savdoni to`xtatish</option>
                        <option value="">Sotishda davom etish</option>
                    </select>
                </div>
            </div>

            <div className="row mb-4 mb-3">
                <div className='col-4 mb-3 col-sm-12 align-items-center justify-content-around d-flex'>
                    <label htmlFor={'l1'}>Brend va fermalarni yoqish</label>
                    <input id={'l1'} type="checkbox" style={{width:'20px',height:'20px'}}/>
                </div>
                <div className='col-4 mb-3 col-sm-12 align-items-center justify-content-around d-flex'>
                    <label htmlFor={'l2'}>Brend va fermalarni yoqish</label>
                    <input id={'l2'} type="checkbox" style={{width:'20px',height:'20px'}}/>
                </div>
                <div className={'col-4 mb-3 col-sm-12 align-items-center justify-content-around d-flex'}>
                    <label htmlFor={'l3'}>Brend va fermalarni yoqish</label>
                    <input id={'l3'} type="checkbox" style={{width:'20px',height:'20px'}}/>
                </div>
            </div>

            <div className="row mb-4 ">
                <div className={'col-4 mb-3 col-sm-12 align-items-center justify-content-around d-flex'}>
                    <label htmlFor={'l4'}>Narx va soliq mahsulotlari</label>
                    <input type="checkbox" id={'l4'} style={{width:'20px',height:'20px'}}/>
                </div>
                <div className='col-4 mb-3 col-sm-12'>
                    <label htmlFor={'l5'}>Amaldagi o`lchov birligi:</label>
                    <select name="" id={'l5'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Kg</option>
                        <option value="#">Dona</option>
                    </select>
                </div>
                <div className={'col-4 mb-3 col-sm-12 align-items-center justify-content-around d-flex'}>
                    <label htmlFor={'l6'}>Amaldagi o`lchov birligi:</label>
                    <input type="checkbox" id={'l6'} style={{width:'20px',height:'20px'}}/>
                </div>
            </div>
        </div>
    )
}
export default Mahsulot2