import './foydaZarar.css'
import {connect} from "react-redux";
import {useEffect,useState} from "react";
import FoydaZararReducer, {deleteFoydaZarar, editFoydaZarar, getFoydaZarar, saveFoydaZarar} from "../reducer/FoydaZararReducer";
import MaxsulotlarRoyxariReducer, {
       deleteMaxsulotRuyxati,
       getMaxsulotRuyxati
} from "../../Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";
import SavdoOynaReducer, {deleteSavdo, editSavdo, getSavdo, saveSavdo} from "../../Savdo/reducer/SavdoOynaReducer";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function FoydaZarar({getFoydaZarar,saveFoydaZarar,MaxsulotlarRoyxariReducer,deleteFoydaZarar,foydazarar}) {

       const [input,setInput] = useState(
           {
                  branchId:1,
                  firstDate:'',
                  secondDate:'',
                  name:'',
           }
       )

       const [startDate, setStartDate] = useState(new Date());
       function bazatanlash(e){
              input.branchId= e.target.value
              let a = {...input}
              setInput(a)
       }

       function aniqsananibelgilash(e){
              if(e.target.value == 1){
                     const bugun = parseInt(new Date().getFullYear())+"-"+ parseInt(new Date().getMonth()+1)+'-'+ parseInt(new Date().getDate())
                     const bugun2 = new Date().getFullYear()+"-"+ (new Date().getMonth()+1)+'-'+ (new Date().getDate() - 7)
                     console.log(typeof bugun)
                     const bugun3 = new Date().toLocaleDateString()
                     console.log(bugun3)
                     console.log(typeof bugun3)
                     console.log(bugun2)
                     input.firstDate=(bugun)
                     input.secondDate=parseInt(bugun2)
                     let a ={...input}
                     setInput(a)
                     console.log(input)
                     saveFoydaZarar(input)
              }

       }
       useEffect(()=>{
              getFoydaZarar()
              getMaxsulotRuyxati()
       },[])



       return (
              <div className="col-md-12 mt-4 mb-4">
                     {/*<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />*/}
                     <div className="textHeaderF">
                     <h2>Foyda va Zarar</h2>
                     </div>
                     <div className="rowStyleF">
                            <div className="izlashF">
                                   <div className="row">
                                          <div className="col-md-6 col-sm-10">
                                                 <h6>Baza tanlash:</h6>
                                                 <select value={input.bazatanlash} onChange={bazatanlash} name="" id="" >
                                                        <option value="" >Barcha bazalar</option>
                                                 </select>
                                          </div>
                                          <div className="col-md-6 col-sm-10">
                                                 <h6>Aniq sanani belgilash:</h6>
                                                 <select name="" id="" value={input.aniqsananibelgilash} onChange={aniqsananibelgilash}>
                                                        <option value="" hidden> Aniq sana belgilash</option>
                                                        <option value="">Bugun</option>
                                                        <option value="1">Oxirgi 1 hafta</option>
                                                        <option value="">Oxirgi 1 oy</option>
                                                        <option value="">Istalgan sanani tanlash</option>
                                                 </select>
                                          </div>
                                   </div>
                            </div>
                            <div className="table-responsive mb-4">
                            <table className='table table-striped table-bordered mt-4'>
                                   <thead>
                                          <tr>
                                                 <th>Nomi</th>
                                                 <th>Maxsulot sotib olish narxi(sum)</th>
                                                 <th>Maxsulot sotish narxi(sum)</th>
                                                 <th>Umumiy qoladigan foyda(sum) </th>
                                                 <th>Qilingan xarajat</th>
                                                 <th>Sof foyda(sum)</th>
                                          </tr>
                                   </thead>
                                   <tbody>
                                   {
                                          MaxsulotlarRoyxariReducer.maxsulotlar.map(item=><tr key={item.id}>
                                                 <td>{item.name}</td>
                                                 <td>{item.buyPrice}</td>
                                                 <td>{item.salePrice}</td>
                                                 <td>{item.salePrice-item.buyPrice}</td>
                                                 <td>{item.tax}</td>
                                                 <td>{(item.salePrice-item.buyPrice) -item.tax}</td>
                                          </tr>)
                                   }

                                   </tbody>
                            </table>
                            </div>

                            <p>Ko'rsatildi 1 ta sahifa 1 va yana 1 ta sahifa bor</p>
                            <div className='sahifalar'>
                                   <button>Ortga</button>
                                   <button>1</button>
                                   <button>Oldinga</button>
                            </div>
                     </div>
              </div>  
       )
}
// export default connect(({FoydaZararReducer:{foydazarar}})=>({foydazarar}),{getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar}) (FoydaZarar)
export default connect((MaxsulotlarRoyxariReducer,FoydaZararReducer),{getFoydaZarar,saveFoydaZarar,editFoydaZarar,deleteFoydaZarar,getMaxsulotRuyxati,deleteMaxsulotRuyxati}) (FoydaZarar)
