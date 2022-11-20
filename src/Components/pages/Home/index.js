import React from 'react'
import './css/index.css';
import { Button } from 'react-bootstrap';

import banner from '../../Assets/img/banner.png';
import facebook from '../../Assets/img/facebook.png'
import logo from '../../Assets/img/logo-1.png'
import otp from '../../Assets/img/otp.png'
import shopee from '../../Assets/img/shopee.png'
import social from '../../Assets/img/social.png'
import via from '../../Assets/img/via.png'
import tiktok from '../../Assets/img/tiktok.png'
import instagram from '../../Assets/img/instagram.png'
import youtube from '../../Assets/img/youtube.png'
import viaclone from '../../Assets/img/viaclone.png'
import vietnamese from '../../Assets/img/vietnamese.svg';
import mtk from '../../Assets/img/mtk.svg';
import mtk2 from '../../Assets/img/mtk2.svg';
import mtk3 from '../../Assets/img/mtk3.svg';
import Dich from '../../Assets/img/Dich.png';


const Home = () => {
  return (
    <div id="app">
      <div className="layout">
        <div className="header">
          <div className="logo-home">
            <a href="javascript:void(0)" className="logo-link">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="nav-warp">
            <ul className="nav-left"></ul>
            <ul className="nav-right">
              <div id="google_translate_element">
                 {/* <div className='skiptranslate goog-te-gadget' dir='ltr'>
                    <div id=':0.targetLanguage'>
                      <select className='goog-te-combo' aria-label='Tiện ích ngôn ngữ'>
                        <option value="">Chọn Ngôn ngữ</option>
                        <option value="en">Anh</option>
                        <option value="pt">Bồ Đào Nha</option>
                        <option value="tl">Filipino</option>
                        <option value="ko">Hàn</option>
                        <option value="hi">Hindi</option>
                        <option value="id">Indonesia</option>
                        <option value="ms">Mã Lai</option>
                        <option value="my">Myanmar</option>
                        <option value="ja">Nhật</option>
                        <option value="ta">Tamil</option>
                        <option value="es">Tây Ban Nha</option>
                        <option value="th">Thái</option>
                        <option value="zh-CN">Trung (Giản thể)</option>
                        <option value="zh-TW">Trung (Phồn thể)</option>
                        <option value="ur">Urdu</option>
                        <option value="it">Ý</option>                        
                      </select>
                    </div>
                    "được hổ trợ"
                    <span style={{whiteSpace: 'nowrap'}}>
                      <a className='goog-logo-link' href='https://translate.google.com/'>
                        <img className='goog-te-banner-frame'  src= {Dich} alt="Google Dịch"/>
                        "Dịch"
                      </a>
                    </span>
                </div>
                <div className="dropdown dropdown-language">
                  <Button className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false" variant="text-light">
                    <img src={vietnamese} style={{ borderRadius: '5px' }} />
                    <span className='Language-vi' style={{marginLeft: '3px'}}>Việt Nam</span>
                  </Button>
                </div>
                <div className='dropdown-menu'>
                  <span class="dropdown-item" onclick="resetTranslate()">
                    <img src={vietnamese} style={{ borderRadius: '5px' }} />Việt Nam
                  </span>
                </div> */}
              </div>
              <a style={{ borderRadius: '20px' }} href="/Rigister" className="btn btn-info btn-low"> Đăng ký miễn phí</a>
              <a href="/Login" className="btn text "> Đăng nhập </a>
            </ul>
          </div>
        </div>

        <div className="banner-quick">
          <img className="banner-img" src={banner} alt="Banner" />
        </div>

        <div className="quick-abs">
          <div className="container">
            <div style={{ margin: '0 0' }} className="row">
              <div className="col-md-4">
                <div className="single-service single-service-one">
                  <a href="#" title="Dịch vụ Social">
                    <img src={social} alt="Dịch vụ Social" />
                  </a>
                  <h3>Dịch vụ Social</h3>
                  <p>Tăng Like, Theo dõi, Comment trên Facebook, Instagram, Shopee, TikTok,Google.
                  </p>
                  <Button className="btn btn-use btn-primary" >Dùng ngay</Button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-service single-service-one">
                  <a href="#" title="Dịch vụ Social">
                    <img src={via} alt="Dịch vụ Social" />
                  </a>
                  <h3>Nick Facebook</h3>
                  <p>Tài khoản Facebook Chạy Quảng Cáo, Nick thật dùng để Seeding, Spam, Nick Xác minh danh tính, Business.
                  </p>
                  <Button className="btn btn-use btn-primary" >Dùng ngay</Button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="single-service single-service-one">
                  <a href="#" title="Nhận OTP">
                    <img src={otp} alt="Dịch vụ Social" />
                  </a>
                  <h3>Thuê sim nhận OTP</h3>
                  <p>Bạn chỉ có 1 Số điện thoại, Bạn có quá nhiều dịch vụ cần nhiều Sim, Hãy vào đây chúng tôi sẽ giúp bạn
                  </p>
                  <Button className="btn btn-use btn-primary" >Dùng ngay</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1140px' }} className="container category_wrapper">
          <div className="category col-lg-12 row">
            <div className="col-lg-2 col-4">
              <a href="#">
                <img src={facebook} alt="Facebook" />
                <span className='category-span'>Facebook</span>
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="#">
                <img src={shopee} alt="Shopee" />
                <span className='category-span'>Shopee</span>
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="#">
                <img src={tiktok} alt="Tiktok" />
                <span className='category-span'>Tiktok</span>
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="#">
                <img src={instagram} alt="instagram" />
                <span className='category-span'>Instagram</span>
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="#">
                <img src={youtube} alt="Youtube" />
                <span className='category-span'>Youtube</span>
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="#">
                <img src={viaclone} alt="Via Clone" />
                <span className='category-span'>Via - Clone</span>
              </a>
            </div>
          </div>
        </div>

        <div className='style-4 section'>
          <div className='container-section' style={{maxWidth: '1140px'}}>
            <div className='col-lg-12 row our_service' style={{margin: '0 0'}}>
              <div className='col-md-4'>
                <div className='single-service'>
                  <img src={mtk} alt="Mtk-1" />
                  <h3> Dịch vụ Social</h3>
                  <p>Thu hút triệu khách hàng trên Facebook, Instagram, TikTok</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='single-service'>
                  <img src={mtk2} alt="Mtk-2" />
                  <h3> Shop Via - Clone Facebook</h3>
                  <p>Shop Via - Clone Facebook, Via Ngoại - Tây, TKQC, BM...</p>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='single-service'>
                  <img src={mtk3} alt="Mtk-3" />
                  <h3> Thuê sim </h3>
                  <p>Bạn có quá nhiều dịch vụ cần nhiều Sim, chúng tôi sẽ giúp bạn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='container bottom_border'style={{maxWidth: '1140px'}}>
            <div className='row'>
              <div className='col-md-4'>
                <h5 className='headin5_amrc col_white_amrc pt2' style={{textTransform: 'uppercase'}}>
                    Hoanvuonq.com
                </h5>
                <p className='mb10'>Dịch vụ Social - Shop Via Facebook - Thuê Sim</p>
              </div>
              <div className='col-md-4'>
                <h5 className='headin5_amrc col_white_amrc pt2' style={{textTransform: 'uppercase'}}>
                    Menu
                </h5>
                <p className='mb10'>Tất cả dịch vụ</p>
              </div>
              <div className='col-md-4'>
                <h5 className='headin5_amrc col_white_amrc pt2' style={{textTransform: 'uppercase'}}>
                    Dịch vụ
                </h5>
                <p className='mb10'>Mạng xã hội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;

