import React, {useState} from 'react';
import Third from "./ThirdPage/Third";
import './headerthird.css'
import Header from "./header/Header";
import {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Switch, Route} from "react-router-dom";
import HodimlarRoyhati from "./Sidebar/Hodimlar/hodimlarRoyxati/HodimlarRoyhati";
import Lavozimlar from "./Sidebar/Hodimlar/Lavozimlar/Lavozimlar";
import HodimlarSavdodanUlushi from "./Sidebar/Hodimlar/hodimlarSavdodanUlushi/HodimlarSavdodanUlushi";
import Taxrirlash from "./Sidebar/Hodimlar/hodimlarRoyxati/Taxrirlash/Taxrirlash";
import Korish from "./Sidebar/Hodimlar/hodimlarRoyxati/Korish/Korish";
import Taxrirlash2 from './Sidebar/Hodimlar/Lavozimlar/Taxrirlash/Taxrirlash';
import Taminotchilar from "./Sidebar/Hamkorlar/taminotchilar/Taminotchilar";
import Mijozlarguruxi from "./Sidebar/Hamkorlar/MijozGurux/MijozlarGuruxi";
import Korish2 from "./Sidebar/Hamkorlar/taminotchilar/Korish/Korish";
import MaxsulotlarRoyxati from "./Sidebar/Maxsulotlar/MahsulotlarRuyxati/MaxsulotlarRoyxati";
import SotuvNarxiniGuruxlash from "./Sidebar/Maxsulotlar/sotuvNarxiniGuruxlash/SotuvNarxiniGuruxlash";
import Bolimlar from "./Sidebar/Maxsulotlar/bolimlar/Bolimlar";
import Firmalar from "./Sidebar/Maxsulotlar/firmalar/Firmalar";
import Taxrirlash3 from './Sidebar/Maxsulotlar/MahsulotlarRuyxati/Taxrirlash/Taxrirlash';
import Xarid from "./Sidebar/Haridlar/Xarid qilish/Xarid";
import HaridlarRoyxati from "./Sidebar/Haridlar/haridlarRoyxati/HaridlarRoyxati";
import SavdoQoshish from "./Sidebar/Savdo/SavdoQoshish/SavdoQoshish";
import SavdoOynasi from "./Sidebar/Savdo/SavdoOynasi/SavdoOynasi";
import OtkazmalarRoyxati from "./Sidebar/Baza/otkazmalarRoyxati/OtkazmalarRoyxati";
import YangiOtkazma from "./Sidebar/Baza/yangiOtkazma/YangiOtkazma";
import Taxrirlash4 from './Sidebar/Baza/otkazmalarRoyxati/taxrirlash/Taxrirlash'
import XaridlarXisoboti from "./Sidebar/Xisobotlar/XaridlarXisoboti/XaridlarXisoboti";
import XarajatlarRoyxati from "./Sidebar/Xarajatlar/xarajatlarRoyxati/XarajatlarRoyxati";
import XarajatQoshish from "./Sidebar/Xarajatlar/Qoshish/XarajatQoshish";
import XarajatTurlari from "./Sidebar/Xarajatlar/xarajatTurlari/XarajatTurlari";
import FoydaZarar from "./Sidebar/Xisobotlar/foydaZarar/FoydaZarar";
import MijozlarXisoboti from './Sidebar/Xisobotlar/MijozlarXisoboti/MijozlarXisoboti'
import MaxsulotXisoboti from "./Sidebar/Xisobotlar/MaxsulotlarXisoboti/MaxsulotXisoboti";
import SavdodaTulov from "./Sidebar/Xisobotlar/SavdodaQilinganTulov/SavdodaTulov";
import XarajatlarXisoboti from "./Sidebar/Xisobotlar/xarajatlarXisoboti/XarajatlarXisoboti";
import KopSotilgan from "./Sidebar/Xisobotlar/KopSotilganTovarlar/KopSotilgan";
import OtkazmalarXisoboti from "./Sidebar/Xisobotlar/otkazmalarXisoboti/OtkazmalarXisoboti";
import QoldiqlarXisoboti from "./Sidebar/Xisobotlar/qoldiqlarXisoboti/QoldiqlarXisoboti";
import Dukon from "./Sidebar/Settings/DukonSozlamalari/Dukon";
import SoliqlarXisoboti from "./Sidebar/Xisobotlar/soliqlarXisoboti/SoliqlarXisoboti";
import Bazalar from './Sidebar/Settings/bazalar/Bazalar'
import SozlamalarBtn from './Sidebar/Settings/bazalar/SozlamalarBtn'
import Yangiotkazma from './Sidebar/Baza/otkazmalarRoyxati/taxrirlash/Taxrirlash'
import Dukon1 from './Sidebar/Settings/DukonSozlamalari/dukon/Dukon1'
import Soliq from './Sidebar/Settings/DukonSozlamalari/soliq/Soliq'
import BarchaSavdolar from "./Sidebar/Savdo/BarcaSavdolar/BarchaSavdolar";
import Profil from "./header/Profil";
import SavdoOyna from "./Sidebar/Settings/DukonSozlamalari/SavdoOynasi/SavdoOyna";
function Headerthird() {

    const [classheader,setClassheader] = useState('classheader1')

    function sidebarheader(){
        if(classheader==='classheader1'){
            setClassheader('classheader2')
        }
        else{
            setClassheader('classheader1')
        }
    }
    const history = useHistory()

    useEffect(() => {
        history.push('/headerthird')
    }, [])

    window.addEventListener('popstate',function (){

    })

    return (
        <div className={'headerthird'}>
            <div className={`${classheader}`}>
                <Header sidebarfunc={sidebarheader}/>
            </div>
            <Switch>
                <Route path={'/headerthird/hodimlarruyxati/taxrirlash/:id?'} component={Taxrirlash}/>
                <Route path={'/headerthird/hodimlarruyxati/taxrirlash'} component={Taxrirlash}/>
                <Route path={'/headerthird/hodimlarruyxati/view/:name?/:login?/:email?'} component={Korish}/>
                <Route path={'/headerthird/hodimlarruyxati'} component={HodimlarRoyhati}/>
                <Route path={'/headerthird/lavozimlar/taxrirlash/:id?'} component={Taxrirlash2}/>
                <Route path={'/headerthird/lavozimlar/taxrirlash'} component={Taxrirlash2}/>
                <Route path={'/headerthird/lavozimlar'} component={Lavozimlar}/>
                <Route path={'/headerthird/hodimulush/taxrirlash'} component={Taxrirlash}/>
                <Route path={'/headerthird/hodimulush/view'} component={Korish}/>
                <Route path={'/headerthird/hodimulush'} component={HodimlarSavdodanUlushi}/>
                <Route path={'/headerthird/taminotchilar/view'} component={Korish2}/>
                <Route path={'/headerthird/taminotchilar'} component={Taminotchilar}/>
                <Route path={'/headerthird/mijozlarGuruhi'} component={Mijozlarguruxi}/>
                <Route path={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash/:id?'} component={Taxrirlash3}/>
                <Route path={'/headerthird/mahsulotRuyxati/barcaMahsulot/taxrirlash'} component={Taxrirlash3}/>
                <Route path={'/headerthird/mahsulotRuyxati'} component={MaxsulotlarRoyxati}/>
                <Route path={'/headerthird/sotuvNarxGuruhlanishi'} component={SotuvNarxiniGuruxlash}/>
                <Route path={'/headerthird/bolimlar'} component={Bolimlar}/>
                <Route path={'/headerthird/firmalar'} component={Firmalar}/>
                <Route path={'/headerthird/xaridQilish'} component={Xarid}/>
                <Route path={'/headerthird/xaridlarRuyxati'} component={HaridlarRoyxati}/>
                {/*fix me xaridlar ruyxati taxrirlash*/}
                <Route path={'/headerthird/xaridlarRuyxati/1'} component={Xarid}/>
                <Route path={'/headerthird/barcasavdolar'} component={BarchaSavdolar}/>
                <Route path={'/headerthird/mahsulotQoshish/:id?'} component={SavdoQoshish}/>
                <Route path={'/headerthird/mahsulotQoshish'} component={SavdoQoshish}/>
                {/*<Route path={'/headerthird/turliTavar'} component={SavdoOynasi}/>*/}
                <Route path={'/headerthird/utkazmaRuyxati/taxrirlash'} component={YangiOtkazma}/>
                <Route path={'/headerthird/utkazmaRuyxati/taxrirlash'} component={YangiOtkazma}/>
                <Route path={'/headerthird/utkazmaRuyxati'} component={OtkazmalarRoyxati}/>
                <Route path={'/headerthird/yangiOtkazma'} component={YangiOtkazma}/>
                <Route path={'/headerthird/xarajatRuyxati'} component={XarajatlarRoyxati}/>
                <Route path={'/headerthird/xarajatQoshish/:id?'} component={XarajatQoshish}/>
                <Route path={'/headerthird/xarajatQoshish'} component={XarajatQoshish}/>
                <Route path={'/headerthird/xarajatTurlari'} component={XarajatTurlari}/>
                <Route path={'/headerthird/foydaZarar'} component={FoydaZarar}/>
                <Route path={'/headerthird/xaridlarXisoboti'} component={XaridlarXisoboti}/>
                <Route path={'/headerthird/mijozlarXisoboti'} component={MijozlarXisoboti}/>
                <Route path={'/headerthird/mahsulotXisoboti'} component={MaxsulotXisoboti}/>
                <Route path={'/headerthird/savdoTolov'} component={SavdodaTulov}/>
                <Route path={'/headerthird/xarajatXisoboti'} component={XarajatlarXisoboti}/>
                <Route path={'/headerthird/kopSotilgan'} component={KopSotilgan}/>
                <Route path={'/headerthird/otkazmalarXisoboti'} component={OtkazmalarXisoboti}/>
                <Route path={'/headerthird/qoldiqlarXisoboti'} component={QoldiqlarXisoboti}/>
                <Route path={'/headerthird/dukonSozlama'} component={Dukon}/>
                <Route path={'/headerthird/soliqlarXisoboti'} component={SoliqlarXisoboti}/>
                <Route path={'/headerthird/bazalarSetting'} component={Bazalar}/>
                <Route path={'/headerthird/bazaSozlama'} component={SozlamalarBtn}/>
                <Route path={'/headerthird/profil'} component={Profil}/>
                <Route path={'/headerthird/'} component={Third}/>
            </Switch>
        </div>
    );
}

export default Headerthird;