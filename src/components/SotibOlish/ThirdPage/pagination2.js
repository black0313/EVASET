import React, {useState, useEffect} from 'react';
import './PAGANATION.css';
import RenderComponent2 from "./RenderComponent2";
import {connect} from "react-redux";
import SavdoQoshishReducer, {getSavdolar} from "../Sidebar/Savdo/reducer/SavdoQoshishReducer";
import users, {savdooynasi} from "../../../reducer/users";
import functionreducer, {active, activSavdo} from "../../../reducer/functionreducer";
import XaridReducer, {getXarid} from "../Sidebar/Haridlar/reducer/XaridReducer";
import MaxsulotlarRoyxariReducer, {getMaxsulotRuyxati} from "../Sidebar/Maxsulotlar/reducer/MaxsulotlarRoyxariReducer";

function Pagination2({getMaxsulotRuyxati,MaxsulotlarRoyxariReducer,users,}) {
    useEffect(() => {
        ommabop()
        getMaxsulotRuyxati(users.businessId)
    }, [])


    const [posts, setposts] = useState([])


    const [mahsulot, setmahsulot] = useState(
        {
            name: 'Dell Computer Monitor',
            baza: 'Baza nomi',
            Qolganmahsulot: `${2850} dona`,
        }
    )

    const [pages, setpages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    function ommabop() {
        for (let i = 0; i < 200; i++) {
            let a = posts
            a.push({...mahsulot, id: i})
            setposts(a)
        }
        let d = posts.length / 5
        setpages(d)
    }

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * 5 - 5;
        const endIndex = startIndex + 5;
        return posts.slice(startIndex, endIndex);
    };
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 3) * 3;
        return new Array(3).fill().map((_, idx) => start + idx + 1);
    };


    return (

        <div>
            <div>
                <div className="row p-0 pb-3 table-responsive">
                    <div className={'table-responsive'}>
                        <table className={"table table2"}>
                            <thead>
                            <tr className={'justify-content-between border-0'}>
                                <th className={'border-0 thead-padding-left'}>Mahsulot nomi</th>
                                <th className={'border-0 '}>Baza</th>
                                <th className={'border-0 '}>Qolgan mahsulot</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                MaxsulotlarRoyxariReducer.maxsulotlar.filter(val=>val.quantity<=10).map(item=>
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.branch.name}</td>
                                                <td>{item.quantity}</td>
                                            </tr>

                                    )
                            }
                            </tbody>
                        </table>

                    </div>
                    <hr/>
                    <div className="pagination justify-content-end">
                        {/* previous button */}
                        <button
                            onClick={goToPreviousPage}
                            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            prev
                        </button>

                        {/* show page numbers */}
                        {getPaginationGroup().map((item, index) => (
                            <button
                                key={index}
                                onClick={changePage}
                                className={`paginationItem ${currentPage === item ? 'active' : null}`}
                            >
                                <span>{item}</span>
                            </button>
                        ))}

                        {/* next button */}
                        <button
                            onClick={goToNextPage}
                            className={`next ${currentPage === pages ? 'disabled' : ''}`}
                            disabled={currentPage === pages ? true : false}
                        >
                            next
                        </button>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default connect((SavdoQoshishReducer,users,functionreducer,XaridReducer,MaxsulotlarRoyxariReducer),{getMaxsulotRuyxati,getSavdolar,savdooynasi,active,activSavdo,getXarid}) (Pagination2);