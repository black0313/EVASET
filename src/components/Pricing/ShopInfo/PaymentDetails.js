import React, {useState} from 'react';
import Header from "../../header/Header";
import './paymentDetails.css'

function PaymentDetails(props) {

    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')

    return (
        <div>
            <Header/>
            <div>
                <div className="payment-title mb-5">
                    <h1>Payment Information</h1>
                </div>
                <div className={'container d-flex justify-content-center  align-items-center'}>
                    <div className="col-md-4">
                        <div className="payment-card">
                            <div className="payment-card__info">
                                <div className="payment-card__logo">PlasticIsShiny</div>
                                <div className="payment-card__chip">
                                    <svg className="payment-card__chip-lines" role="img" width="20px" height="20px"
                                         viewBox="0 0 100 100" aria-label="Chip">
                                        <g opacity="0.8">
                                            <polyline points="0,50 35,50" fill="none" stroke="#000" stroke-width="2"/>
                                            <polyline points="0,20 20,20 35,35" fill="none" stroke="#000"
                                                      stroke-width="2"/>
                                            <polyline points="50,0 50,35" fill="none" stroke="#000" stroke-width="2"/>
                                            <polyline points="65,35 80,20 100,20" fill="none" stroke="#000"
                                                      stroke-width="2"/>
                                            <polyline points="100,50 65,50" fill="none" stroke="#000" stroke-width="2"/>
                                            <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000"
                                                      stroke-width="2"/>
                                            <polyline points="0,80 20,80 35,65" fill="none" stroke="#000"
                                                      stroke-width="2"/>
                                            <polyline points="50,100 50,65" fill="none" stroke="#000" stroke-width="2"/>
                                            <polyline points="65,65 80,80 100,80" fill="none" stroke="#000"
                                                      stroke-width="2"/>
                                        </g>
                                    </svg>
                                    <div className="card__chip-texture"></div>
                                </div>
                                <div className="payment-card__type">debit</div>
                                <div className="payment-card__number">
                                <span className="payment-card__digit-group">

                                    {cardNumber.substring(0, 4) + " " + cardNumber.substring(4, 8) + "  " + cardNumber.substring(8, 12) + "  " +cardNumber.substring(12,16)}
                                </span>
                                </div>
                                <div className="payment-card__valid-thru" aria-label="Valid thru">
                                    Valid tru
                                </div>
                                <div className="payment-card__exp-date">
                                    <time dateTime="2038-01">01/38</time>
                                </div>
                                <div className="payment-card__name" aria-label="Dee Stroyer">
                                    {
                                        cardName === "" ? "Dee Stroyer" : cardName
                                    }
                                </div>
                                <div className="payment-card__vendor" role="img" aria-labelledby="card-vendor">
                                    <span id="card-vendor" className="payment-card__vendor-sr">Mastercard</span>
                                </div>
                            </div>
                            <div className="payment-card__texture"></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-container">
                            <form action="" className={''}>
                                <label htmlFor="name">Card Name</label>
                                <input type="text" id='name' onChange={(e) => setCardName(e.target.value)}
                                       className={'payment-input mb-1'}/>
                                <label htmlFor="cardNumber">Card Number</label>
                                <input type="text" id='cardNumber' onChange={(e) => setCardNumber(e.target.value)}
                                       className={'payment-input mb-1'}/>
                                <div className="col-md-12 p-0  d-flex justify-content-between align-items-center">
                                    <div className="col-md-6 p-0">
                                        <label htmlFor="cardNumber">Expiration (mm/yy)</label>
                                        <input type="text" id='cardNumber' className={'payment-input'}/>
                                    </div>
                                    <div className="col-md-5 p-0">
                                        <label htmlFor="cardNumber">
                                            Security Code</label>
                                        <input type="text" id='name' className={'payment-input '}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentDetails;
