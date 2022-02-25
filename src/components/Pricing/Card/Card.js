import img from '../../../img/tick-circle.png'
import './Card.css'
function Card() {
    return(
        <div className={'row'}>

            <div className="card">
                <p>
                    Preimum
                </p>
                <div className="price">
                    <h4>599 990</h4>
                    <p>so`m / yiliga</p>
                </div>
                <p>
                    Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
                <button className={'btn btn-outline-primary'}>
                    Tarifni ulash
                </button>

                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz bazalar</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz hodimlar</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz mahsulot</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz hsob-fakturalari</p>
                </div>

            </div>

        </div>
    )
}
export default Card