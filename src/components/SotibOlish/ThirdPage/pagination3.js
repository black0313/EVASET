import React, { useState, useEffect } from 'react';
import './PAGANATION.css';
import RenderComponent3 from "./RenderComponent3";

function Pagination3() {
    useEffect(() => {
        ommabop()
    }, [])


    const [posts, setposts] = useState([])


    const [mahsulot, setmahsulot] = useState(
        {
            amal: '10.12.2021',
            sana: '26.11.2021',
            buyurtma:"123456789",
            mijoz:"Gulomov J.",
            phonenumber:"+998 99 999 99 99",
            baza:"Baza nomlari",
            status:"Kutish jarayonida",
            yetkazishstatus:"Kutish jarayonida",
            qolganmiqdor:"2500 dona",
            savdogar:"Tulkinov F",
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
                <div className="row p-0 pb-3 ">
                    <div className={'table-responsive'}>
                        <table className={"table table3"}>
                            <thead>
                            <tr className={'justify-content-between border-0'}>
                                <th className={'border-0 thead-padding-left'}>Amal</th>
                                <th className={'border-0 '}>Sana</th>
                                <th className={'border-0 '}>Buyurtma No.</th>
                                <th className={'border-0 '}>Mijoz</th>
                                <th className={'border-0 '}>Telefon raqami</th>
                                <th className={'border-0 '}>Baza</th>
                                <th className={'border-0 '}>Status</th>
                                <th className={'border-0 '}>Yetkazish statusi</th>
                                <th className={'border-0 '}>Qolgan miqdor</th>
                                <th className={'border-0 '}>Savdogar</th>
                            </tr>
                            </thead>
                            <tbody>
                            {getPaginatedData().map((d, idx) => (
                                <RenderComponent3 key={idx} data={d} />
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

export default Pagination3;