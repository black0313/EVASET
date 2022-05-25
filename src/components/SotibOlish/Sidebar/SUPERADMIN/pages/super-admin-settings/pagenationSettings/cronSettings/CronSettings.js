import React from 'react'
import './cronSettings.css'

export default function CronSettings() {
    return (
        <div className='ms-3 me-3 cronContainer'>
            <h5 className='mb-3 text-center'>Cron Jobs Settings</h5>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <p className='text1'>To send <b>subscription expiry alert</b>  & <b>automated application backup</b> process you must setup a cron job with this command:</p>
                    <p className='textColorRed'>* * * * * /opt/php74/bin/php-cgi /var/www/evaset/data/www/ombor.evaset.uz/artisan schedule:run  /dev/null 2&1</p>
                    <p className='text2'>Set it in cron jobs tab in cpanel or directadmin or similar panel. <br />
                        Or edit crontab if using cloud/dedicated hosting. <br />
                        Or contact hosting for help with cron job settings.</p>
                </div>
            </div>
            <div className="d-flex justify-content-end" style={{ marginTop: '200px' }}>
                <button className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
    )
}
