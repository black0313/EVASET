import './korish.css'
function Korish(props) {
   const {name,tel,telegram,taminot} = props.match.params;
    {console.log(props.match.params)}
    return(
        <div className={'row p-2'}>
            <h4>Ko`rish</h4>
            <div className="col-md-12">
                <div className={'info'}>
                    <h5 className={'text-center'}>Taminotchi haqida malumot</h5>
                    <table className={'table'}>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Tel:</th>
                            <th>Telegram</th>
                            <th>Taminot</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{tel}</td>
                            <td>{telegram}</td>
                            <td>{taminot}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Korish