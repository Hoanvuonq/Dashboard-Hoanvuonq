import React from 'react'
import '../Login/css/index.css'

import logo from '../../Assets/img/logo-1.png'


const Rigister = () => {
    return (
        <div id="app">
        <div className="main">
            <div className="wrap">
                <div className="content wide-xs">
                        <div className="logo-content">
                            <a href="#" className="logo-link">
                            <img src={logo} alt="Logo" />
                            </a>
                        </div>

                        <div className="card-content">
                            <div className="card-inner ">
                                <div className="card-head">
                                    <h4 className="card-block-head-title">Đăng ký</h4>
                                </div>

                                <form className="from-card" action="Home.html" method="post" data-done="loginSuccess">
                                    <div className="from-group">
                                        <div className="from-label-group">
                                            <label className="from-label">Họ và Tên</label>
                                        </div>
                                        <input name="username" type="text" className="form-control form-control-lg" 
                                        placeholder="Nhập họ và tên" required />
                                    </div>
                                    <div className="from-group">
                                        <div className="from-label-group">
                                            <label className="from-label">Tài khoản</label>
                                        </div>
                                        <input name="username" type="text" className="form-control form-control-lg" 
                                        placeholder="Nhập tên đăng nhập" required />
                                    </div>
                                    <div className="from-group">
                                        <div className="from-label-group">
                                            <label className="from-label">Email</label>
                                        </div>
                                        <input name="username" type="text" className="form-control form-control-lg" 
                                        placeholder="Nhập email" required />
                                    </div>

                                    <div className="from-group">
                                        <div className="from-label-group">
                                            <label for="password">Mật khẩu</label>
                                        </div>
                                        <div className="form-control-wrap">
                                            <input id="password-field" name="password" type="password" 
                                            className="form-control form-control-lg" placeholder="Nhập mật khẩu"required />

                                            <a onclick="showpassword()" toggle="#password-field" className="fas fa-eye field-icon toggle-password">
                                            </a>
                                        </div>
                                        {/* <script type="text/javascript">
                                            function showpassword(){
                                                var input = document.getElementById('password-field')
                                                if (input.type == "password") {
                                                    input.type = "text";
                                                } else {
                                                    input.type = "password";
                                                }

                                            }
                                        </script>    */}

                                        <div className="form-group">
                                            <div className="custom-control custom-control-xs custom-checkbox" required>
                                                <input type="checkbox" className="custom-control-input" id="checkbox" checked />
                                                <label className="custom-control-label" for="checkbox">Tôi đồng ý với <a href="javascript:void(0)">Chính sách</a> &amp; <a href="javascript:void(0)"> Điều khoản.</a></label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button className="btn btn-lg btn-primary btn-block">Đăng nhập</button>
                                        </div>

                                        <div className="form-note"> Bạn chưa có tài khoản? 
                                            <a href="/Login">Đăng nhập</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Rigister