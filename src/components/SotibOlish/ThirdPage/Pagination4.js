import React, { useState, useEffect } from 'react';
import './PAGANATION.css';
import RenderComponent4 from "./RenderComponent4";

function Pagination4() {
    useEffect(() => {
        ommabop()
    }, [])


    const [posts, setposts] = useState([])


    const [mahsulot, setmahsulot] = useState(
        {
            savdonumber: '80656464',
            mijoz: 'Jasurbek Davranov',
            qarzmiqdori: '1 298 000 som',
            amal: "30.12.2021",
        }
    )

    const [pages,setpages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    function ommabop() {
        for (let i = 0; i < 200; i++) {
            let a = posts
            a.push({...mahsulot, id: i})
            setposts(a)
        }
        let d = posts.length/5
        setpages(d)
    }

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        console.log(posts)
        console.log(pages)
        console.log(currentPage)
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
                <div className="row p-0 pb-3">
                    <div className={'table-responsive'}>
                        <table className={"table table4"}>
                            <thead>
                            <tr className={'justify-content-between border-0'}>
                                <th className={'border-0 thead-padding-left'}>Savdo raqami</th>
                                <th className={'border-0 '}>Mijoz</th>
                                <th className={'border-0 '}>Qarz miqdori</th>
                                <th className={'border-0 '}>Amal</th>

                            </tr>
                            </thead>
                            <tbody>
                            {getPaginatedData().map((d, idx) => (
                                <RenderComponent4 key={idx} data={d} />
                            ))}
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
                            disabled={currentPage===pages ? true : false}
                        >
                            next
                        </button>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default Pagination4;