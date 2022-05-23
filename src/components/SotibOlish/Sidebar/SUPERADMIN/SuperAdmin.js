import './superadmin.css'
import icon from '../../../../img/storefront-outline.svg'
import { Route,Routes, Switch, Link } from 'react-router-dom'
import SuperAdminPages from './pages/superadmin/SuperAdminPage'
import AllBusenesses from './pages/all-buseness/AllBusenesses'
import PackageSubscription from './pages/package-subscription/PackageSubscripton'
import Packages from './pages/packages/Packages'
import SuperAdminSettings from './pages/super-admin-settings/SuperAdminSettings'
import Communicator from './pages/communicator/Communicator'
import AddBusiness from './pages/all-buseness/addBusiness/AddBusiness'
import PackageAdd from './pages/packages/PackageAdd/PackageAdd'

function SuperAdmin() {

    return <div className="col-md-12 pb-4 pt-4">
        <div className="rowStyleSA">
            <Link to='/headerthird/superadmin'> <button><img src={icon} alt="" /> Superadmin</button></Link>
            <Link to='/headerthird/superadmin/allbusenesses'> <button>All Busenesses</button></Link>
            <Link to='/headerthird/superadmin/packagesubscription'> <button>Package Subscription</button></Link>
            <Link to='/headerthird/superadmin/paskages'> <button>Paskages</button></Link>
            <Link to='/headerthird/superadmin/superadminsettings'> <button>Super Admin Settings</button></Link>
            <Link to='/headerthird/superadmin/communicator'> <button>Communicator</button></Link>
        </div>
        <div className='mt-2'>
            <Switch>
                <Route path={'/headerthird/superadmin/allbusenesses/addbusiness'} component={AddBusiness} />
                <Route path={'/headerthird/superadmin/allbusenesses'} component={AllBusenesses}/>
                <Route path={'/headerthird/superadmin/packagesubscription'} component={PackageSubscription}/>
                <Route path={'/headerthird/superadmin/paskages/addpackage'} component={PackageAdd}/>
                <Route path={'/headerthird/superadmin/paskages'} component={Packages}/>
                <Route path={'/headerthird/superadmin/superadminsettings'} component={SuperAdminSettings}/>
                <Route path={'/headerthird/superadmin/communicator'} component={Communicator}/>
                <Route path={'/headerthird/superadmin'}component={SuperAdminPages}/>
            </Switch>
        </div>
    </div>


}

export default SuperAdmin