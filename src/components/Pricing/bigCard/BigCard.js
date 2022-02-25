import './BigCard.css'
import img from '../../../img/tick-circle.png'
function BigCard() {

    return(
        <div className={'row'}>
            <div className="card">

                <p>
                    Business
                </p>

                <div className="price">
                    <h4>399 900</h4>
                    <p>so`m / yiliga</p>
                </div>

                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

                <button className={'btn btn-outline-primary form-control'}>
                    Tarifni ulash
                </button>

                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz bazalar</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>100 tagacha hodim</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>1000 tagacha mahsulot</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz bazalar</p>
                </div>
               
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz imkoniyatlar</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>1000 tagacha mahsulot</p>
                </div>

                <div className="ch">
                    <img src={img} alt=""/>
                    <p>1000 tagacha fakturalar</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz hisob fakturalar</p>
                </div>
            </div>
        </div>
    )
}
export default BigCard