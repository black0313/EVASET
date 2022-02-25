import img from '../../../img/tick-circle.png'
import './card1.css'
function Card1() {
    return(
        <div className={'row'}>

            <div className="card">
                <p>
                    Oddiy
                </p>
                <div className="price">
                    <h4>149 990</h4>
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
                    <p>100 tagacha hodim</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>100 tagacha mahsulot</p>
                </div>
                <div className="ch">
                    <img src={img} alt=""/>
                    <p>Cheksiz hsob-fakturalari</p>
                </div>

            </div>

        </div>
    )
}
export default Card1