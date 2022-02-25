import './tizimKorinishi.css'

export default function TizimKorinishiDukonSozlama(){
    return(
        <div className={'tizimCont'}>
            <div className="row">
                <div className="col-4 col-md-12 mb-3">
                    <label htmlFor={'dastur'}>Dastur ko`rinishi</label>
                    <select name="" id={'dastur'} className={'form-control'}>
                        <option value="#">Tanlash</option>
                        <option value="#">Blue</option>
                        <option value="#">Black</option>
                        <option value="#">Purple</option>
                        <option value="#">Green</option>
                    </select>
                </div>
                <div className="col-4 col-md-12 mb-3 ">
                    <label htmlFor={'dastur'}> maxsulotlarni ko'rsatadigan oynadagi soni nechta bo'sin</label>
                    <select name="" id={'dastur'} className={'form-control'}>
                        <option value="#">25</option>
                        <option value="#">50</option>
                        <option value="#">100</option>
                        <option value="#">500</option>
                        <option value="#">1000</option>
                    </select>
                </div>
                <div className="col-4 col-md-12 mb-3 d-flex">
                    <label htmlFor={'yor'}>Yordam matnini yoqish</label>
                    <input type="checkbox" id={'yor'} style={{width:'20px',height:'20px'}}/>
                </div>
            </div>
        </div>
    )
}