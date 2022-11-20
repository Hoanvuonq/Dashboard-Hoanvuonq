import React from "react";
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import logo from '../../Assets/img/logo-1.png';
import vietnamese from '../../Assets/img/vietnamese.svg';
import user from '../../Assets/img/user.svg';
import coin from '../../Assets/img/coin.png';
import home from '../../Assets/img/home.svg';
import store from '../../Assets/img/store.svg';
import menuVia from '../../Assets/img/menuVia.svg';
import menuClone from '../../Assets/img/menuClone.svg';
import menuBusiness from '../../Assets/img/menuBusiness.svg';
import History from '../../Assets/img/History.svg';
import key from '../../Assets/img/key.svg';
import checklive from '../../Assets/img/checklive.svg';
import bank from '../../Assets/img/bank.svg';
import fileHistory from '../../Assets/img/file-history.svg';
import ticket from '../../Assets/img/ticket.svg';
import contact from '../../Assets/img/contact.svg';

const cx = classNames.bind(styles)

const Sidebar = () => {
    return (
        <div className={cx('nk-sidebar',cx('nk-sidebar-fixed'),cx('is-light'),cx('nk-sidebar-active'))} data-content="sidebarMenu">
            <div className={cx('nk-sidebar-element',cx('nk-sidebar-head'))}>
                <div className={cx('back-w')}>
                    <div className={cx('nk-sidebar-brand')}>
                        <a href="#" className={cx('logo-link', cx('nk-sidebar-logo'))}>
                            <img className={cx('logo-dark', cx('logo-img'))} src={logo} alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>

            <div className={cx('nk-sidebar-element')}>
                <div className={cx('nk-sidebar-content')}>
                    <div className={cx('nk-sidebar-menu')} data-simplebar="init">
                        <div className={cx('simplebar-wrapper')}>
                            <div className={cx('simplebar-height-auto-observer-wrapper')}>
                                <div className={cx('simplebar-height-auto-observer')}></div>
                            </div>

                            <div className={cx('simplebar-mask')}>
                                <div className={cx('simplebar-offset')}>
                                    <div className={cx('simplebar-content-wrapper')}>
                                        <div className={cx('simplebar-content')}>
                                            <ul className={cx('nk-menu')}>
                                                <li className={cx('user-info1')}>
                                                    <div className={cx('image-user')}>
                                                        <img src={user} style={{ borderRadius: '5px' }} />
                                                    </div>
                                                    <div className={cx('info-container')}>
                                                        <div className={cx('name')} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className={cx('user-name')}>Hoanvuonq</span>
                                                            <span className={cx('hyphen')}>
                                                                <h5>-</h5>
                                                            </span>
                                                            <span className={cx('role')}>Khách hàng</span>
                                                        </div>
                                                    </div>
                                                    <div className={cx('quality')}>
                                                        <span className={cx('price')}>1.000.000.000</span>
                                                        <span className={cx('coin')}>
                                                            <img src={coin} alt="Coin" />
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className={cx('nk-menu-heading')}>
                                                    <h6 className={cx('title-menu-heading')}>
                                                        MENU
                                                    </h6>
                                                </li>
                                                <li className={cx('nk-menu-item')}>
                                                    <a href="/Dashboard" className={cx('nk-menu-link')}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={home} alt="Home" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Tổng Quan</span>
                                                    </a>
                                                </li>
                                                <li className={cx('nk-menu-heading')}>
                                                    <h6 className={cx('title-menu-heading')}>
                                                        DịCH VỤ
                                                    </h6>
                                                </li>
                                                <li className={cx('nk-menu-item',cx('has-sub'),cx('active'),cx('current-page'))}>
                                                    <a href="#" className={cx('nk-menu-link',cx('nk-menu-toggle'))}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={store} alt="Store" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Mua Via - Clone</span>
                                                        <div className={cx('sidebar-dropdown')}>
                                                            <Dropdown as={ButtonGroup}>

                                                                <Dropdown.Toggle className={cx('dropdown-sidebar')} />

                                                                <div className={cx('drop-menu-side')}>
                                                                    <Dropdown.Menu className={cx('dropdown-menu')}>
                                                                        <ul className={cx('nk-menu-sub', cx('menu-min'))}>
                                                                            <li className={cx('nk-menu-item-1',cx('active'),cx('current-page'))}>
                                                                                <a href="/ProductVia" className={cx('nk-menu-link')} data-original-title="" title="">
                                                                                    <span className={cx('nk-menu-icon')}>
                                                                                        <img src={menuVia} alt="menuVia" />
                                                                                    </span>
                                                                                    <span className={cx('nk-menu-text',cx('menu-text'))}>Mua Via</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className={cx('nk-menu-item-1',cx('active'),cx('current-page'))}>
                                                                                <a href="/ProductVia" className={cx('nk-menu-link')} data-original-title="" title="">
                                                                                    <span className={cx('nk-menu-icon')}>
                                                                                        <img src={menuClone} alt="menuClone" />
                                                                                    </span>
                                                                                    <span className={cx('nk-menu-text',cx('menu-text'))}>Mua Clone</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className={cx('nk-menu-item-1',cx('active'),cx('current-page'))}>
                                                                                <a href="/ProductVia" className={cx('nk-menu-link')} data-original-title="" title="">
                                                                                    <span className={cx('nk-menu-icon')}>
                                                                                        <img src={menuBusiness} alt="menuBusiness" />
                                                                                    </span>
                                                                                    <span className={cx('nk-menu-text',cx('menu-text'))}>Mua BM</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className={cx('nk-menu-item-1',cx('active'),cx('current-page'))}>
                                                                                <a href="/ProductVia" className={cx('nk-menu-link')} data-original-title="" title="">
                                                                                    <span className={cx('nk-menu-icon')}>
                                                                                        <img src={menuVia} alt="menuVia" />
                                                                                    </span>
                                                                                    <span className={cx('nk-menu-text',cx('menu-text'))}>Mua Via</span>
                                                                                    <span className={cx('badge',cx('badge-pill'),cx('badge-outline-primary'))}>Đại lý</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className={cx('nk-menu-item-1',cx('active'),cx('current-page'))}>
                                                                                <a href="/ProductVia" className={cx('nk-menu-link')} data-original-title="" title="">
                                                                                    <span className={cx('nk-menu-icon')}>
                                                                                        <img src={menuClone} alt="menuClone" />
                                                                                    </span>
                                                                                    <span className={cx('nk-menu-text',cx('menu-text'))}>Mua Clone</span>
                                                                                    <span className={cx('badge',cx('badge-pill'),cx('badge-outline-primary'))}>Đại lý</span>
                                                                                </a>
                                                                            </li>
                                                                            <li className={cx('nk-menu-item-1',cx('active'),cx('current-page'))}>
                                                                                <a href="/ProductVia" className={cx('nk-menu-link')} data-original-title="" title="">
                                                                                    <span className={cx('nk-menu-icon')}>
                                                                                        <img src={menuBusiness} alt="menuBusiness" />
                                                                                    </span>
                                                                                    <span className={cx('nk-menu-text',cx('menu-text'))}>Mua BM</span>
                                                                                    <span className={cx('badge',cx('badge-pill'),cx('badge-outline-primary'))}>Đại lý</span>
                                                                                </a>
                                                                            </li>
                                                                        </ul>
                                                                    </Dropdown.Menu>
                                                                </div>
                                                            </Dropdown>
                                                        </div>

                                                    </a>
                                                    <a href="#" className={cx('nk-menu-link',cx('nk-menu-toggle'))}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={History} alt="History" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Tài khoản đã mua</span>
                                                    </a>
                                                    <a href="#" className={cx('nk-menu-link',cx('nk-menu-toggle'))}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={key} alt="Key" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Lấy Code từ 2FA</span>
                                                    </a>
                                                    <a href="#" className={cx('nk-menu-link',cx('nk-menu-toggle'))}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={checklive} alt="CheckLive" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Check Live ID</span>
                                                    </a>
                                                </li>
                                                <li className={cx('nk-menu-heading')}>
                                                    <h6 className={cx('title-menu-heading')}>
                                                        TIỆN ÍCH
                                                    </h6>
                                                </li>
                                                <li className={cx('nk-menu-item')}>
                                                    <a href="/Payments" className={cx('nk-menu-link')}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={bank} alt="Bank" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Nạp tiền</span>
                                                    </a>
                                                </li>
                                                <li className={cx('nk-menu-item')}>
                                                    <a href="#" className={cx('nk-menu-link')}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={fileHistory} alt="fileHistory" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Lịch sử giao dịch</span>
                                                    </a>
                                                </li>
                                                <li className={cx('nk-menu-heading')}>
                                                    <h6 className={cx('title-menu-heading')}>
                                                        LIÊN HỆ
                                                    </h6>
                                                </li>
                                                <li className={cx('nk-menu-item')}>
                                                    <a href="#" className={cx('nk-menu-link')}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={ticket} alt="Ticket" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Gửi Ticket hỗ trợ</span>
                                                    </a>
                                                </li>
                                                <li className={cx('nk-menu-item')}>
                                                    <a href="#" className={cx('nk-menu-link')}>
                                                        <span className={cx('nk-menu-icon')}>
                                                            <img src={contact} alt="Contact" />
                                                        </span>
                                                        <span className={cx('nk-menu-text')}>Liên hệ</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={cx('simplebar-placeholder')} style={{width: 'auto', height: '685px'}}></div>
                        </div>

                        <div className={cx('simplebar-track',cx('simplebar-horizontal'))} style={{visibility: 'visible'}}>
                            <div style={{width: '0px', display: 'none'}} className={cx('simplebar-scrollbar')}></div>
                        </div>
                        <div className={cx('simplebar-track', cx('simplebar-vertical'))} style={{visibility: 'visible'}}>
                            <div style={{height: '511px', transform: 'translate3d(0px, 0px, 0px)', display: 'block'}} className={cx('simplebar-scrollbar',cx('simplebar-visible'))}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar