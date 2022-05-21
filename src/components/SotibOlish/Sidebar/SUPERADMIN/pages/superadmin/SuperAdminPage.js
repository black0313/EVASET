import React from 'react'
import './superAdminPage.css'
import Circled from '../../../../../../img/circled-right.png'
import { Link } from 'react-router-dom'
import Chart2 from 'react-apexcharts'


export default function SuperAdminPage() {


    const chartOptionsAdmin = {
        series: [
            {
                name: 'Values',
                data: [0, 1, 2, 3, 4, 5]
            }
        ],
        options: {
            colors: ['#0044FF', '#FF9777'],

            chart: {
                height: 350,
                type: 'area'
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
                categories: [0, 5, 10, 15, 20, 25, 30, 35]
            },
            legend: {
                position: 'top',
            },
            grid: {
                show: true
            }
        }
    }

    const windowScreen = window.screen.height


    return (
        <div className='containersSuperAdmin'>
            <div className="header123">
                <h4 className=''>Welcome Superadmin</h4>
                <div className="buttonBox">
                    <button className='btn buttonStyle'>Bugun</button>
                    <button className='btn buttonStyle'>Bu hafta</button>
                    <button className='btn buttonStyle'>Bir oylik</button>
                    <button className='btn buttonStyle'>Bir yillik</button>
                </div>
            </div>
            <div className="cardBlock">
                <div className="card1">
                    <h3 className='pt-2 ps-2'>0.00$</h3>
                    <p className='ps-2'>New Subscriptions</p>
                    <Link to='/headerthird/superadmin/packagesubscription'> <button>More information <img src={Circled} alt="" /> </button> </Link>
                </div>
                <div className="card2">
                    <h3 className='pt-2 ps-2'>0</h3>
                    <p className='ps-2'>New Business Registrations</p>
                    <Link to='/headerthird/superadmin/allbusenesses'> <button>More information <img src={Circled} alt="" /> </button></Link>
                </div>
                <div className="card3">
                    <h3 className='pt-2 ps-2'>0</h3>
                    <p className='ps-2'>Not Subscribed</p>
                    <Link to='/headerthird/superadmin/allbusenesses'> <button>More information <img src={Circled} alt="" /> </button> </Link>
                </div>
            </div>
            <div className="chartBox">
                <h5>Sale - Monthly for 12 months</h5>
                <Chart2 
                options={chartOptionsAdmin.options}
                series={chartOptionsAdmin.series}
                type={'line'}
                height={windowScreen * 0.40}/>
            </div>
        </div>
    )
}
