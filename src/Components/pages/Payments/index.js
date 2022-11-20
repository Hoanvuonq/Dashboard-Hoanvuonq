import Header from '../../Dashboard/Header'
import Sidebar from '../../Dashboard/Sidebar'
import './css/Payments.css'
import { useState } from 'react'

import useLocalStorage from 'use-local-storage'

import Money from '../../Assets/img/money-bag.png';
import Tool from '../../Assets/img/tool-box.png';
import Momo from '../../Assets/img/momo.png';
import Qr from '../../Assets/img/qr-code.png';
import Card from '../../Assets/img/credit-cards.png';
import VietComBank from '../../Assets/img/vietcombank.png';
import MomoPay from '../../Assets/img/momoPay.png';
import QRYuno from '../../Assets/img/cccc.jpg';
import Tab from '../../Assets/img/new-window.png';


function Payments() {
    const [theme, setTheme] = useLocalStorage ('theme' ? 'dark' : 'light')

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    const [state,setStage] = useState(1);

    const action = (index) => {
    setStage(index)
    }

    return ( 
        <div className='Payments' data-theme={theme}>
            <div style={{position: 'fixed', zIndex: '9999'}}>
                <Header/>
            </div>

            <div style={{position: 'fixed', zIndex: '99999'}}>
            <Sidebar/>
            </div>

            <div className='nk-Payments'>
                <div className='container-fluid'>
                    <div className='nk-Payments-inner'>
                        <div className='nk-Payments-body'>
                            <div className='nk-block'>
                                <div className='row g-gs'>
                                    <div className='col-xxl-12'>
                                        <div className='card card-full'>
                                            <div className='card-inner'>
                                                <div className='card-title-group'>
                                                    <div className='card-title'>
                                                        <h6 className='title'>Nạp tiền</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='nk-tb-list mt-n2 fix-nk-tb-list'>
                                                <div className='card-inner'>
                                                    <ul style={{marginTop: '-64px'}} className='nav nav-tabs nav-payment'>
                                                        <li onClick={()=>action(1)} className='nav-item'>
                                                            <a className={`${state===1 ? 'nav-link active':'nav-link'}`} href='#' data-toggle='tab'>
                                                                <img className='icon ni ni-sign-usdc' src={Money} alt='Money' />
                                                                <span className='title-tab-text'>Tự động</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={()=>action(2)} className='nav-item'>
                                                            <a className={`${state===2 ? 'nav-link active':'nav-link'}`} href='#' data-toggle='tab'>
                                                                <img className='icon ni ni-sign-usdc' src={Tool} alt='Tool' />
                                                                <span className='title-tab-text'>Thủ công</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={()=>action(3)} className='nav-item'>
                                                            <a className={`${state===3 ? 'nav-link active':'nav-link'}`} href='#' data-toggle='tab'>
                                                                <img className='icon ni ni-sign-usdc' src={Momo} alt='Momo' />
                                                                <span className='title-tab-text'>Momo</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={()=>action(4)} className='nav-item'>
                                                            <a className={`${state===4 ? 'nav-link active':'nav-link'}`} href='#' data-toggle='tab'>
                                                                <img className='icon ni ni-sign-usdc' src={Qr} alt='QR' />
                                                                <span className='title-tab-text'>Quét QR</span>
                                                            </a>
                                                        </li>
                                                        <li onClick={()=>action(5)} className='nav-item'>
                                                            <a className={`${state===5 ? 'nav-link active':'nav-link'}`} href='#' data-toggle='tab'>
                                                                <img className='icon ni ni-sign-usdc' src={Card} alt='Card' />
                                                                <span className='title-tab-text'>Thẻ cào</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div className='row'>
                                                        <div className='tab-content col-md-7'>
                                                            <div className={`${state===1 ?'tab-pane text-center active':'tab-pane text-center'}`} id='tabAuto'>
                                                                <div className='money-content'>
                                                                    <div>
                                                                        <div className='tab-money'>
                                                                            <p>
                                                                                <img className='img-bank' src={VietComBank} alt='VietComBank' />
                                                                            </p>
                                                                            <div className='info-bank'>
                                                                                <h6>
                                                                                    <span className='stk-bank'>1510200200</span>
                                                                                </h6>
                                                                                <h6>
                                                                                    <span className='name-bank'>Nguyễn Hoàng Vương</span>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className='text-center cu-phap p-card-hidden'>
                                                                    <h5 className='nd-bank'>NỘI DUNG CHUYỂN KHOẢN</h5>
                                                                    <div className='alert alert-primary' style={{fontWeight: 'bold' , fontSize: '20px', color: '#9769ff'}}>
                                                                        Js hoanvuonq
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={`${state===2 ?'tab-pane text-center active':'tab-pane text-center'}`} id='tabTool'>
                                                                <div className='text-center cu-phap p-card-hidden'>
                                                                    <h5 className='nd-bank'>NỘI DUNG CHUYỂN KHOẢN</h5>
                                                                    <div className='alert alert-primary' style={{fontWeight: 'bold' , fontSize: '20px', color: '#9769ff'}}>
                                                                        Js hoanvuonq
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className={`${state===3 ?'tab-pane text-center active':'tab-pane text-center'}`} id='tabMono'>
                                                                <div className='money-content'>
                                                                    <div>
                                                                        <div className='tab-money'>
                                                                            <p>
                                                                                <img className='img-bank momo-img' src={MomoPay} alt='MomoPay' />
                                                                            </p>
                                                                            <div className='info-bank'>
                                                                                <h6>
                                                                                    <span className='stk-bank'>0589025209</span>
                                                                                </h6>
                                                                                <h6>
                                                                                    <span className='name-bank'>Nguyễn Hoàng Vương</span>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className='text-center cu-phap p-card-hidden'>
                                                                    <h5 className='nd-bank'>NỘI DUNG CHUYỂN KHOẢN</h5>
                                                                    <div className='alert alert-primary' style={{fontWeight: 'bold' , fontSize: '20px', color: '#9769ff'}}>
                                                                        Js hoanvuonq
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={`${state===4 ?'tab-pane text-center active':'tab-pane text-center'}`} id='tabQr'>
                                                                <div className='money-content'>
                                                                    <div>
                                                                        <div className='tab-money'>
                                                                            <p>
                                                                                <img className='img-bank Qr-img' src={QRYuno} alt='QrHoanvuonq' />
                                                                            </p>
                                                                            <div className='info-bank'>
                                                                                <h6>
                                                                                    <span className='stk-bank'>VCB - Ngân hàng TMCP Ngoại Thương Việt Nam</span>
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className='text-center cu-phap p-card-hidden'>
                                                                    <h5 className='nd-bank'>NỘI DUNG CHUYỂN KHOẢN</h5>
                                                                    <div className='alert alert-primary' style={{fontWeight: 'bold' , fontSize: '20px', color: '#9769ff'}}>
                                                                        Js hoanvuonq
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={`${state===5 ?'tab-pane text-center active':'tab-pane text-center'}`} id='tabCard'>
                                                                <div className='text-center cu-phap p-card-hidden'>
                                                                    <h5 className='nd-bank'>NỘI DUNG CHUYỂN KHOẢN</h5>
                                                                    <div className='alert alert-primary' style={{fontWeight: 'bold' , fontSize: '20px', color: '#9769ff'}}>
                                                                        Js hoanvuonq
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-5'>
                                                            <div className='tab-money'>
                                                                <div className='money-note pd-20'>
                                                                    <h6 className='mb-3'>
                                                                        <img className='tab-img' src={Tab} atl='tab'/>
                                                                        <span className='title-tab'>Lưu ý</span>
                                                                    </h6>
                                                                    <div className='p-card-hidden'>
                                                                        <div className='alert alert-danger'>
                                                                            <p className='text-tab'> Vui lòng NẠP tối thiểu từ 10K. Nạp ít hơn mất tiền KHÔNG Xử lý. Xin cảm ơn!</p>
                                                                        </div>

                                                                        <div className='alert alert-warning'>
                                                                            <p className='text-tab'>+ Vui lòng chuyển khoản ĐÚNG nội dung để được nạp tiền tự động trong vòng 30s giây. Không HOÀN TIỀN khi đã NẠP vào.
                                                                                                    + Gợi ý: Bạn có thể Quét QR để chuyển khoản nhanh và chính xác hơn.
                                                                            </p>
                                                                        </div>

                                                                        <div className='alert alert-primary'>
                                                                            <p className='text-tab'>Chuyển SAI nội dung hoặc sau 2 phút không cộng tiền vui lòng liên hệ admin ở phần Liên hệ. </p>
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
        </div>
     );
}

export default Payments;