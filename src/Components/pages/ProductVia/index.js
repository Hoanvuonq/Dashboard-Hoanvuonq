import Header from '../../Dashboard/Header'
import Sidebar from '../../Dashboard/Sidebar'
import './css/ProductVia.css'

import Nation from '../../Assets/img/prod-1.svg';
import Earth from '../../Assets/img/prod-2.svg';
import Calendar from '../../Assets/img/prod-3.svg';
import Unlock from '../../Assets/img/prod-4.svg';
import tich from '../../Assets/img/prod-5.svg';
import Money from '../../Assets/img/prod-6.svg';
import TKQCcn from '../../Assets/img/TKQC-cn.svg';
import Idcard from '../../Assets/img/identity-card.png';
import Tich902 from '../../Assets/img/tich902.svg';
import Vietnamese from '../../Assets/img/vietnam.svg';
import coin from '../../Assets/img/coin.png';
import Cart from '../../Assets/img/shopping-cart.png'
import TKQClimit from '../../Assets/img/tkqc-limit.svg';

import useLocalStorage from 'use-local-storage'



function ProductVia() {

    const [theme, setTheme] = useLocalStorage ('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }
    return ( 
        <div className='product-via' data-theme={theme}>
            <div style={{position: 'fixed', zIndex: '9999'}}>
                <Header/>
            </div>

            <div style={{position: 'fixed', zIndex: '99999'}}>
            <Sidebar/>
            </div>
            
            <div className='nk-prodcutVia'>
                <div className='container-fluid'>
                    <div className='nk-prodcutVia-inner'>
                        <div className='nk-prodcutVia-body'>
                            <div className='nk-block'>
                                <div id='vue-app'>
                                    <div className='card' v-if="group_flash_sale.length">
                                        <div className='product-card-inner'>
                                            <div className='card-title-group'>
                                                <div className='card-title'>
                                                    <h6 id='group_undefined' className='title'>Danh m???c N???i b???t</h6>
                                                <div className='dash-toggle-dard'>
                                                    <div onClick={switchTheme} className= 'Switch react-switch' href="#"></div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-body border-bottom-none deals-list'>
                                            <div className='row'>
                                                <div className='col-xs-12 col-sm-6 col-md-3 col-xl-4 p-b-20 via-group-zoom'>
                                                    <div className='deals__item'>
                                                        <span className='rest position-absolute badge badge-pill badge-purple int-group text-center has-tooltip'>
                                                            c??n: 98
                                                        </span>

                                                        <div className='deals__item-content2'>
                                                            <h4 className='name-account'>Via XMDT M???i - D??ng Kh??ng + Ch???y c??? Ads</h4>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Nation} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>Qu???c gia</span>
                                                                </span>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Earth} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>T???t c???</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Calendar} alt="Calendar"/>
                                                                    </span>
                                                                    <span className='name'>N??m t???o</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>2010-2022</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Unlock} alt="Unlock"/>
                                                                    </span>
                                                                    <span className='name'>CP v??? mail</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={tich} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>T??ch XMDT</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Money} alt="Money"/>
                                                                    </span>
                                                                    <span className='name'>TKQC</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Rd Tr??? tr?????c / sau</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={tich} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>T??ch XMDT</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'> M???i v??? ????????</span>
                                                                </span>
                                                            </p>
                                                            
                                                            <div className='row-acc row'></div>

                                                            <div className='deals-bottom'>
                                                                <div className='row-acc kill'>
                                                                    <div className='col-md-6 col-7 flex-center'>
                                                                        <p className='price-s'>
                                                                            100,000
                                                                            <span className='coin-product'>
                                                                                <img src={coin} alt="Coin" />
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className='col-md-6 col-5 flex-center-end'>
                                                                        <button className='btn btn-dim btn-primary' style={{borderColor: 'rgb(151, 105, 255)'}}>
                                                                            <img className='cart-product-img' src={Cart} alt="Shopping cart"/>
                                                                            Mua
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xs-12 col-sm-6 col-md-3 col-xl-4 p-b-20 via-group-zoom'>
                                                    <div className='deals__item'>
                                                        <span className='rest position-absolute badge badge-pill badge-purple int-group text-center has-tooltip'>
                                                            c??n: 200
                                                        </span>

                                                        <div className='deals__item-content2'>
                                                            <h4 className='name-account'>Via XMDT M???i - Kh??ng + Ch???y Ads - Nh???n TKQC Ok</h4>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Nation} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>Qu???c gia</span>
                                                                </span>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Earth} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>T???t c???</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Calendar} alt="Calendar"/>
                                                                    </span>
                                                                    <span className='name'>N??m t???o</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>2010-2022</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Unlock} alt="Unlock"/>
                                                                    </span>
                                                                    <span className='name'>Cp v??? mail</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Money} alt="Money"/>
                                                                    </span>
                                                                    <span className='name'>TKQC</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Rd Tr??? tr?????c / sau</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={tich} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>T??ch XMDT</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>M???i v??? ????????</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={TKQCcn} alt="TKQC Cn"/>
                                                                    </span>
                                                                    <span className='name'>Nh???n TKQC CN</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            
                                                            <div className='row-acc row'></div>

                                                            <div className='deals-bottom'>
                                                                <div className='row-acc kill'>
                                                                    <div className='col-md-6 col-7 flex-center'>
                                                                        <p className='price-s'>
                                                                            100,000
                                                                            <span className='coin-product'>
                                                                                <img src={coin} alt="Coin" />
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className='col-md-6 col-5 flex-center-end'>
                                                                        <button className='btn btn-dim btn-primary' style={{borderColor: 'rgb(151, 105, 255)'}}>
                                                                            <img className='cart-product-img' src={Cart} alt="Shopping cart"/>
                                                                            Mua
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xs-12 col-sm-6 col-md-3 col-xl-4 p-b-20 via-group-zoom'>
                                                    <div className='deals__item'>
                                                        <span className='rest position-absolute badge badge-pill badge-purple int-group text-center has-tooltip'>
                                                            c??n: 95
                                                        </span>

                                                        <div className='deals__item-content2'>
                                                            <h4 className='name-account'>Via Vi???t Kh??ng 902 + CP v??? Email</h4>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Nation} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>Qu???c gia</span>
                                                                </span>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Vietnamese} alt="Vietnamese"/>
                                                                    </span>
                                                                    <span className='name'>Vi???t Nam</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Calendar} alt="Calendar"/>
                                                                    </span>
                                                                    <span className='name'>N??m t???o</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>2021-2022</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Unlock} alt="Unlock"/>
                                                                    </span>
                                                                    <span className='name'>Cp v??? mail</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Tich902} alt="Money"/>
                                                                    </span>
                                                                    <span className='name'>T??ch 902</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Money} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>TKQC</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Live Ads</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Idcard} alt="B???o hi???m"/>
                                                                    </span>
                                                                    <span className='name'>BH CP v??? Email</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            
                                                            <div className='row-acc row'></div>

                                                            <div className='deals-bottom'>
                                                                <div className='row-acc kill'>
                                                                    <div className='col-md-6 col-7 flex-center'>
                                                                        <p className='price-s'>
                                                                            200,000
                                                                            <span className='coin-product'>
                                                                                <img src={coin} alt="Coin" />
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className='col-md-6 col-5 flex-center-end'>
                                                                        <button className='btn btn-dim btn-primary' style={{borderColor: 'rgb(151, 105, 255)'}}>
                                                                            <img className='cart-product-img' src={Cart} alt="Shopping cart"/>
                                                                            Mua
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xs-12 col-sm-6 col-md-3 col-xl-4 p-b-20 via-group-zoom'>
                                                    <div className='deals__item'>
                                                        <span className='rest position-absolute badge badge-pill badge-purple int-group text-center has-tooltip'>
                                                            c??n: 164
                                                        </span>

                                                        <div className='deals__item-content2'>
                                                            <h4 className='name-account'>Vi???t C??? Kh??ng 902 - TKQC Die Ads</h4>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Nation} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>Qu???c gia</span>
                                                                </span>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Vietnamese} alt="Vietnamese"/>
                                                                    </span>
                                                                    <span className='name'>Vi???t Nam</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Calendar} alt="Calendar"/>
                                                                    </span>
                                                                    <span className='name'>N??m t???o</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>2010-2022</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Unlock} alt="Unlock"/>
                                                                    </span>
                                                                    <span className='name'>Cp v??? mail</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Tich902} alt="Money"/>
                                                                    </span>
                                                                    <span className='name'>T??ch 902</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Money} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>TKQC</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Die Ads</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Idcard} alt="B???o hi???m"/>
                                                                    </span>
                                                                    <span className='name'>D???ng XMDT</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>??p th???ng</span>
                                                                </span>
                                                            </p>
                                                            
                                                            <div className='row-acc row'></div>

                                                            <div className='deals-bottom'>
                                                                <div className='row-acc kill'>
                                                                    <div className='col-md-6 col-7 flex-center'>
                                                                        <p className='price-s'>
                                                                            195,000
                                                                            <span className='coin-product'>
                                                                                <img src={coin} alt="Coin" />
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className='col-md-6 col-5 flex-center-end'>
                                                                        <button className='btn btn-dim btn-primary' style={{borderColor: 'rgb(151, 105, 255)'}}>
                                                                            <img className='cart-product-img' src={Cart} alt="Shopping cart"/>
                                                                            Mua
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xs-12 col-sm-6 col-md-3 col-xl-4 p-b-20 via-group-zoom'>
                                                    <div className='deals__item'>
                                                        <span className='rest position-absolute badge badge-pill badge-purple int-group text-center has-tooltip'>
                                                            c??n: 94
                                                        </span>

                                                        <div className='deals__item-content2'>
                                                            <h4 className='name-account'>Via Vi???t C???, Kh??ng 902 + CP v??? Email</h4>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Nation} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>Qu???c gia</span>
                                                                </span>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Vietnamese} alt="Vietnamese"/>
                                                                    </span>
                                                                    <span className='name'>Vi???t Nam</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Calendar} alt="Calendar"/>
                                                                    </span>
                                                                    <span className='name'>N??m t???o</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>2010-2022</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Unlock} alt="Unlock"/>
                                                                    </span>
                                                                    <span className='name'>Cp v??? mail</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Tich902} alt="Money"/>
                                                                    </span>
                                                                    <span className='name'>T??ch 902</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Money} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>TKQC</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Live Ads</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={TKQClimit} alt="B???o hi???m"/>
                                                                    </span>
                                                                    <span className='name'>TKQC Limit</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>580K+ - 1m1+</span>
                                                                </span>
                                                            </p>
                                                            
                                                            <div className='row-acc row'></div>

                                                            <div className='deals-bottom'>
                                                                <div className='row-acc kill'>
                                                                    <div className='col-md-6 col-7 flex-center'>
                                                                        <p className='price-s'>
                                                                            200,000
                                                                            <span className='coin-product'>
                                                                                <img src={coin} alt="Coin" />
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className='col-md-6 col-5 flex-center-end'>
                                                                        <button className='btn btn-dim btn-primary' style={{borderColor: 'rgb(151, 105, 255)'}}>
                                                                            <img className='cart-product-img' src={Cart} alt="Shopping cart"/>
                                                                            Mua
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xs-12 col-sm-6 col-md-3 col-xl-4 p-b-20 via-group-zoom'>
                                                    <div className='deals__item'>
                                                        <span className='rest position-absolute badge badge-pill badge-purple int-group text-center has-tooltip'>
                                                            c??n: 9
                                                        </span>

                                                        <div className='deals__item-content2'>
                                                            <h4 className='name-account'>Via Ngo???i Kh??ng 902 - Die Ads + CP v??? Email</h4>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Nation} alt="quocGia"/>
                                                                    </span>
                                                                    <span className='name'>Qu???c gia</span>
                                                                </span>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Vietnamese} alt="Vietnamese"/>
                                                                    </span>
                                                                    <span className='name'>Vi???t Nam</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Calendar} alt="Calendar"/>
                                                                    </span>
                                                                    <span className='name'>N??m t???o</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>2010-2022</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Unlock} alt="Unlock"/>
                                                                    </span>
                                                                    <span className='name'>Cp v??? mail</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Tich902} alt="Money"/>
                                                                    </span>
                                                                    <span className='name'>T??ch 902</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>C??</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={Money} alt="T??ch xanh"/>
                                                                    </span>
                                                                    <span className='name'>TKQC</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Die Ads</span>
                                                                </span>
                                                            </p>
                                                            <p className='d-flex justify-content-between' style={{color: 'rgb(83, 83, 95)'}}>
                                                                <span>
                                                                    <span className='img-product'>
                                                                        <img className='group-logo' src={TKQClimit} alt="B???o hi???m"/>
                                                                    </span>
                                                                    <span className='name'>TKQC Limit</span>
                                                                </span>
                                                                <span>
                                                                    <span className='name'>Random</span>
                                                                </span>
                                                            </p>
                                                            
                                                            <div className='row-acc row'></div>

                                                            <div className='deals-bottom'>
                                                                <div className='row-acc kill'>
                                                                    <div className='col-md-6 col-7 flex-center'>
                                                                        <p className='price-s'>
                                                                            235,000
                                                                            <span className='coin-product'>
                                                                                <img src={coin} alt="Coin" />
                                                                            </span>
                                                                        </p>
                                                                    </div>

                                                                    <div className='col-md-6 col-5 flex-center-end'>
                                                                        <button className='btn btn-dim btn-primary' style={{borderColor: 'rgb(151, 105, 255)'}}>
                                                                            <img className='cart-product-img' src={Cart} alt="Shopping cart"/>
                                                                            Mua
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ProductVia;