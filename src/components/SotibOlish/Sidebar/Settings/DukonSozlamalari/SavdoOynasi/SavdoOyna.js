import "./savdoOynasi.css"
export default function SavdoOyna(){
    return(
        <div className={'savdoOynaContainer'}>
             <h3 className='text-center pb-3'>Savdo oynasi sozlamalari</h3>
            <div className="row mb-4">
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input className="me-2" type="checkbox" id={'101'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'101'}>Turli to'lovlarni o'chirish</label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'102'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'102'}> Eslatmani o'chirish</label>
                </div>
                <div className="col-4 me-2 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input type="checkbox" id={'103'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'103'}>Tezkor sotishni o'chirish</label>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'104'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'104'}>Mahsulot taklifini namoyish qilmang</label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'105'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'105'}> So'nggi savdolarni namoyish qilmang</label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'106'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'106'}> Chegirmalarni o'chirish</label>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'107'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'107'}>Savdo uchun soliqlarni o'chirish</label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'108'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'108'}>  Jami summani taxrirlash</label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'109'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'109'}>  Ushlab turishni yoqish</label>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'110'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'110'}>POS ekranida tranzaksiya sanasini yoqing</label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'111'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'111'}>Xodimlarni mahsulot qatorida yoqish </label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'112'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'112'}>   Xizmat ko'rsatuvchi xodimlar kerakmi?</label>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'113'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'113'}>Kreditga sotishni o'chirish </label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'114'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'114'}>Tarozi o'lchovini yoqish </label>
                </div>
                <div className="col-4 mb-3 col-sm-12 d-flex justify-content-start align-items-center">
                    <input  className="me-2"  type="checkbox" id={'115'} style={{width:'20px',height:'20px'}}/>
                    <label htmlFor={'115'}>  To'lov sxemalarini ko'rsatish</label>
                </div>
            </div>


        </div>
    )
}