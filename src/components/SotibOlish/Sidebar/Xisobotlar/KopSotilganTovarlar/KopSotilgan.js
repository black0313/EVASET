import './kopsotilgan.css';
import { Link,Switch,Route } from 'react-router-dom'
import CSV from '../../../../../img/CSV.png'
import Excel from '../../../../../img/Excel.png'
import Print from '../../../../../img/Print.png'
import Data from '../../../../../img/Data.png'
import Pdf from '../../../../../img/PDF.png'
import Edit from '../../../../../img/Edit.png'
import Delete from '../../../../../img/Delete.png'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Chart from "react-apexcharts";
import {connect} from 'react-redux'
import {getKopsotilgan,saveKopsotilgan,editKopsotilgan,deleteKopsotilgan} from '../reducer/KopsotilgantovarlarReducer'
import {useEffect,useState} from 'react'
function KopSotilgan({mijoz,dukon,summa,eslatma,}) {

    useEffect(()=>{
        getKopsotilgan()
    },[])

    const [inputvalue,setInputvalue] = useState(
        {
            baza:'',
            bolim:'',
            bolim2:'',
            firma:'',
            ulcovbirligi:'',
            sananiblegilang:'',
            numofproduct:'',
            maxsulotturi:'',

        }
    )

    function baza(e){
        inputvalue.baza = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function bolim(e){
        inputvalue.bolim = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function bolim2(e){
        inputvalue.bolim2 = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function firma(e){
        inputvalue.firma = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function ulcovbirligi(e){
        inputvalue.ulcovbirligi = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function sananiblegilang(e){
        inputvalue.sananiblegilang = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function numofproduct(e){
        inputvalue.numofproduct = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    function maxsulotturi(e){
        inputvalue.maxsulotturi = e.target.value
        let a = {...inputvalue}
        setInputvalue(a)
    }
    // const {mijoz,dukon,summa,eslatma} = props.match.params
    const [input,setInput] = useState(
        {
            mijoz: 'React',
            dukon: 'korzinka',
            summa: '13',
            eslatma:'joylashadi'
        }
    )
    const [active,setActive] = useState(false)

    function toggle(){
        setActive(!active)
    }

    const chartOptions = {
        series: [
            {
                name: "Kop sotilgan miqdor",
                data: [100000, 400000, 250000, 300000, 450000, 150000]
            },
            {
                name: 'Harajat',
                data: [120000, 300000, 250000, 400000, 200000, 100000]
            }
            ],
        options: {
            color: ['#ffffff', '#ff9777'],
            chart: {
                background: "transparent"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            yaxis: {
                min: 0,
                max: 500000
            },
            xaxis: {
                categories: [0, 5, 10, 15, 20, 25, 30]
            },
            legend: {
                position: 'top',
            },
            grid: {
                show: true
            }
        }
    };

    return (
        <div className="col-md-12 mt-4 ">
            <div className="textHeader">
                <h2>Ko`p sotilgan tovarlar</h2>
            </div>
            <div className="rowStyleKS">
                <div className="qoshish">
                    <h5>Filtirlash</h5>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-12">
                        <h6>Baza:</h6>
                        <input value={inputvalue.baza} onChange={baza} placeholder='Baza nomi...' type="text" className={'inputSelectStyl'}/>
                    </div>
                    <div className="col-6 col-sm-12">
                        <h6>Bo`lim:</h6>
                        <select name="" value={inputvalue.bolim} onChange={bolim} id="" className='inputSelectStyl' >
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-12">
                        <h6>Bo`lim ichida bo`lim:</h6>
                        <select name="" id="" className='inputSelectStyl' value={inputvalue.bolim2} onChange={bolim2}>
                            <option value="">Tanlash</option>
                            <option value="">Shefir zavod</option>
                            <option value="">Instrumentlar</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-12">
                        <h6>Ferma:</h6>
                        <select name="" className='inputSelectStyl'  id="" value={inputvalue.firma} onChange={firma}>
                            <option value="">Bugun</option>
                            <option value="">Kecha</option>
                            <option value="">Oxirgi 7 kun</option>
                            <option value="">Oxirgi 30 kun</option>
                            <option value="">Bu oy</option>
                            <option value="">O`tgan oy</option>
                            <option value="">Bu yilgi moliya</option>
                            <option value="">Bu yil</option>
                            <option value="">O`tgan yil moliyasi</option>
                            <option value="" onClick={toggle}>Siz istagan sana</option>
                        </select>
                    </div>

                </div>


                    <div className="row">
                        <div className="col-3 col-sm-12">
                            <label htmlFor={'olcov1'}>O`lchov birligi</label>
                            <select name="" id={'olcov1'} className='inputSelectStyl' value={inputvalue.ulcovbirligi} onChange={ulcovbirligi}>
                                <option value="#">Barchasi</option>
                                <option value="#">Pc(s)</option>
                                <option value="#">Kg</option>
                                <option value="#">Dona</option>
                            </select>
                        </div>
                        <div className="col-3 col-sm-12">
                            <label htmlFor={'olcov2'}>Sanani belgilang</label>
                            <select name="" className='inputSelectStyl' id={'olcov2'} onChange={sananiblegilang} value={inputvalue.sananiblegilang}>
                                <option value="#">Sanani belgilang</option>
                                <option value="#">Bugun</option>
                                <option value="#">Kecha</option>
                                <option value="#">Oxirgi 7 kun</option>
                                <option value="#">Oxirgi oy</option>
                                <option value="#">Oxirgi yil</option>
                                <option value="#">Siz istagan sana</option>
                            </select>
                        </div>
                        <div className="col-3 col-sm-12">
                            <label htmlFor={'olcov3'}>Mahsulot soni</label>
                            <input type="text" id={'olcov3'}  placeholder='Mahsulot soni...' className={'inputSelectStyl'} value={inputvalue.numofproduct} onChange={numofproduct}/>
                        </div>
                        <div className="col-3 col-sm-12">
                            <label htmlFor={'olcov4'} >Maxsulot turi</label>
                            <select name="" className='inputSelectStyl' id={'olcov4'} value={inputvalue.maxsulotturi} onChange={maxsulotturi}>
                                <option value="#">Barchasi</option>
                                <option value="#">Bir tuliq</option>
                                <option value="#">Turli xil</option>
                            </select>
                        </div>
                    </div>
                
            </div>

            <div className="rowStyleKS2 mpb-4">

                <div className="row justify-content-between text-end ps-2 pe-2 pb-4 ">


                    <Chart
                        options={chartOptions.options}
                        series={chartOptions.series}
                        type={'line'}
                        height='400px'
                    />

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
export default connect(({KopsotilgantovarlarReducer:{kopsotilgan}})=>({kopsotilgan}),{getKopsotilgan,saveKopsotilgan,editKopsotilgan,deleteKopsotilgan}) (KopSotilgan)
