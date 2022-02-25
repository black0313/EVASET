import './secondPage.css'
import Card1 from '../card1/Card1';
import Card from "../Card/Card";
import BigCard from "../bigCard/BigCard";

function SecondPage() {


    return(


        <div className={`container secondpage`}>
            <div className={'row'}>
                <div className="col-md-12">
                    <div className="text">
                        <h4>Oddiy, shaffof narxlash</h4>
                        <p>Istalgan vaqtda shartnomani bekor qilish</p>
                    </div>

                    <div className="active">
                        <div className='activSelect'>
                            <p className={'p1'}>Oylik</p>
                            <input type="checkbox" id={'switch'}/>
                            <label className={'switch'} htmlFor="switch">
                                <span ></span>
                            </label>

                            <p className={'p2'}>Yillik</p>
                            </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 f">
                    <div className='fBox'>
                        <div className="c1">
                            <Card1/>
                        </div>

                        <div className="c2">
                            <BigCard/>
                        </div>

                        <div className="c3">
                            <Card/>
                        </div>
                    </div>
                </div>
                <div className="back">
                </div>
            </div>
        </div>
    )
}
export default SecondPage