import React from "react";
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import classNames from 'classnames/bind'
import styles from './Header.module.scss'

import logo from '../../Assets/img/logo-1.png';
import user from '../../Assets/img/user.svg';
import like from '../../Assets/img/like.png';
import card from '../../Assets/img/card.png';
import user2 from '../../Assets/img/user2.png';
import pen from '../../Assets/img/pen.png';
import logout from '../../Assets/img/logout.png';

const cx = classNames.bind (styles)

const Header = () => {
    return (
        <div className={cx('nk-header',cx('nk-header-fixed'),cx('is-light'))}>
                <div className={cx('container-fluid')}>
                <div className={cx('nk-header-wrap')}>
                    {/* <div className={cx('nk-menu-trigger',cx('d-xl-none'),cx('ml-n1'))}>
                        <a href="#" className={cx('nk-nav-toggle',cx('nk-quick-nav-icon'))} data-target="sidebarMenu">
                            <img className={cx('tab')} src={like} alt="Tab" />
                        </a>
                    </div> */}
                    <div className={cx('nk-header-brand',cx('d-xl-none'))}>
                        <a className={cx('logo-link')} >
                            <img className={cx('logo-dark', cx('logo-img'))}  src={logo} alt="logo" />
                        </a>
                    </div>
                    <div className={cx('nk-header-tools')}>
                        <ul className={cx('nk-quick-nav')}>
                            <li className={cx('user-toggle')}>
                                <div className={cx('user-avatar',cx('sm'))}>
                                    <img className={cx('user-avatar-img')} src={user} />
                                </div>
                                <div className={cx('user-info',cx('d-none'),cx('d-xl-block'))}>
                                    <div className={cx('user-name', cx('dropdown-indicator'))} style={{textTransform: 'capitalize', fontWeight: 'bold'}}>Nguyễn Hoàng Vương </div>
                                </div>
                                <Dropdown as={ButtonGroup}>

                                    <Dropdown.Toggle  className={cx('dropdown-user')} />

                                    <div className={cx('drop-menu-user')}>
                                        <Dropdown.Menu className={cx('drop-menu')}>
                                        <div className={cx('dropdown-inner',cx('user-card-wrap'),cx('bg-lighter'),cx('d-none'),cx('d-md-block'))}>
                                            <div className={cx('user-card')}>
                                                <div className={cx('user-avatar')}>
                                                    <img src={user} style={{ width: '42px',height: '39px',aspectRatio: 'auto 50/50' }} />
                                                </div>
                                                <div className={cx('user-info')}>
                                                    <span className={cx('lead-text')} >Hoanvuonq</span>
                                                    <span className={cx('sub-text')}>hoanvuonq2002@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('dropdown-inner')}>
                                            <ul className={cx('link-list')}>
                                                <li>
                                                    <a href="#">
                                                        <img src={card} alt="Card" />
                                                        <span className={cx('title-card')}>Nạp tiền</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={user2} alt="User-2" />
                                                        <span className={cx('title-card')}>Thông tin</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src={pen} alt="Pen" />
                                                        <span className={cx('title-card')}>Đổi mật khẩu</span>
                                                    </a>
                                                </li>
                                               
                                            </ul>
                                        </div>
                                        <div className={cx('dropdown-inner')}>
                                            <ul className={cx('link-list')}>
                                                <li>
                                                    <a href="#">
                                                        <img src={logout} alt="Logout" />
                                                        <span className={cx('title-card')}>Đăng xuất</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        </Dropdown.Menu>
                                    </div>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
        </div>
    )}

export default Header