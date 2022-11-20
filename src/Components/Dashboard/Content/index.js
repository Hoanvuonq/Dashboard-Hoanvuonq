import classNames from 'classnames/bind'
import styles from './Content.module.scss'


const cx = classNames.bind (styles)

function Content() {
    return ( 
        <div className={cx('nk-content')}>
            <div className={cx('container-fluid')}>
                <div className={cx('nk-content-inner')}>
                    <div className={cx('nk-content-body')}>
                        <div className={cx('nk-block')}>
                            <div className={cx('nk-block')}>
                                <div className={cx('row',cx('g-gs'))}>
                                    <div className={cx('col-lg-3',cx('col-sm-6'))}>
                                        <div className={cx('card')}>
                                            <div className={cx('nk-ecwg',cx('nk-ecwg6'))}>
                                                <div className={cx('card-inner')}>
                                                    <div className={cx('card-title-group')}>
                                                        <div className={cx('card-title')}>
                                                            <h6 className={cx('title')}>SỐ DƯ</h6>
                                                        </div>
                                                    </div>
                                                    <div className={cx('data')}>
                                                        <div className={cx('data-group')}>
                                                            <div className={cx('amount',cx('current_money'))}>
                                                                1,000,000
                                                            </div>
                                                        </div>
                                                        {/* <div className={cx('nk-ecwg6-ck')}>
                                                            <div className={cx('chartjs-size-monitor')}>
                                                                <div className={cx('chartjs-size-monitor-expand')}>
                                                                    <div className=''></div>
                                                                </div>
                                                                <div className={cx('chartjs-size-monitor-shrink')}>
                                                                    <div className=''></div>
                                                                </div>
                                                            </div>
                                                            <canvas className={cx('ecommerce-line-chart-s3',cx('chartjs-render-monitor'))}
                                                            id={'todayOrders'} style={{display: 'block', width: '79px', height: '40px'}}>

                                                            </canvas>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col-lg-3',cx('col-sm-6'))}>
                                        <div className={cx('card')}>
                                            <div className={cx('nk-ecwg',cx('nk-ecwg6'))}>
                                                <div className={cx('card-inner')}>
                                                    <div className={cx('card-title-group')}>
                                                        <div className={cx('card-title')}>
                                                            <h6 className={cx('title')}>TỔNG NẠP</h6>
                                                        </div>
                                                    </div>
                                                    <div className={cx('data')}>
                                                        <div className={cx('data-group')}>
                                                            <div className={cx('amount',cx('current_money'))}>
                                                                200,000
                                                            </div>
                                                        </div>
                                                        {/* <div className={cx('nk-ecwg6-ck')}>
                                                            <div className={cx('chartjs-size-monitor')}>
                                                                <div className={cx('chartjs-size-monitor-expand')}>
                                                                    <div className=''></div>
                                                                </div>
                                                                <div className={cx('chartjs-size-monitor-shrink')}>
                                                                    <div className=''></div>
                                                                </div>
                                                            </div>
                                                            <canvas className={cx('ecommerce-line-chart-s3',cx('chartjs-render-monitor'))}
                                                            id={'todayOrders'} style={{display: 'block', width: '79px', height: '40px'}}>

                                                            </canvas>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col-lg-3',cx('col-sm-6'))}>
                                        <div className={cx('card')}>
                                            <div className={cx('nk-ecwg',cx('nk-ecwg6'))}>
                                                <div className={cx('card-inner')}>
                                                    <div className={cx('card-title-group')}>
                                                        <div className={cx('card-title')}>
                                                            <h6 className={cx('title')}>TỔNG CHI TIÊU</h6>
                                                        </div>
                                                    </div>
                                                    <div className={cx('data')}>
                                                        <div className={cx('data-group')}>
                                                            <div className={cx('amount',cx('current_money'))}>
                                                                123,456
                                                            </div>
                                                        </div>
                                                        {/* <div className={cx('nk-ecwg6-ck')}>
                                                            <div className={cx('chartjs-size-monitor')}>
                                                                <div className={cx('chartjs-size-monitor-expand')}>
                                                                    <div className=''></div>
                                                                </div>
                                                                <div className={cx('chartjs-size-monitor-shrink')}>
                                                                    <div className=''></div>
                                                                </div>
                                                            </div>
                                                            <canvas className={cx('ecommerce-line-chart-s3',cx('chartjs-render-monitor'))}
                                                            id={'todayOrders'} style={{display: 'block', width: '79px', height: '40px'}}>

                                                            </canvas>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('col-lg-3',cx('col-sm-6'))}>
                                        <div className={cx('card')}>
                                            <div className={cx('nk-ecwg',cx('nk-ecwg6'))}>
                                                <div className={cx('card-inner')}>
                                                    <div className={cx('card-title-group')}>
                                                        <div className={cx('card-title')}>
                                                            <h6 className={cx('title')}>TỔNG NẠP THÁNG</h6>
                                                        </div>
                                                    </div>
                                                    <div className={cx('data')}>
                                                        <div className={cx('data-group')}>
                                                            <div className={cx('amount',cx('current_money'))}>
                                                                0
                                                            </div>
                                                        </div>
                                                        {/* <div className={cx('nk-ecwg6-ck')}>
                                                            <div className={cx('chartjs-size-monitor')}>
                                                                <div className={cx('chartjs-size-monitor-expand')}>
                                                                    <div className=''></div>
                                                                </div>
                                                                <div className={cx('chartjs-size-monitor-shrink')}>
                                                                    <div className=''></div>
                                                                </div>
                                                            </div>
                                                            <canvas className={cx('ecommerce-line-chart-s3',cx('chartjs-render-monitor'))}
                                                            id={'todayOrders'} style={{display: 'block', width: '79px', height: '40px'}}>

                                                            </canvas>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('col-lg-8')}>
                                        <div className={cx('card',cx('card-full'))}>
                                            <div className={cx('nk-ecwg',cx('nk-ecwg8'),cx('h-100'))}>
                                                <div className={cx('card-inner')}>
                                                    <div className={cx('card-title-group',cx('mb-3'))}>
                                                        <div className={cx('card-title')}>
                                                            <h6 className={cx('title')}>THỐNG KÊ</h6>
                                                        </div>
                                                    </div>

                                                    <ul className={cx('nk-ecwg8-legends',cx('chart-money'))}>
                                                        <li>
                                                            <div className={cx('title')}>
                                                                <span className={cx('dot',cx('dot-lg'),cx('sq'),cx('chart-color'))} data-bg="#6576ff"style={{background: 'rgb(101, 118, 255)'}}></span>
                                                                <span className={cx('chart-label')}>ĐÃ NẠP</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={cx('title')}>
                                                                <span className={cx('dot',cx('dot-lg'),cx('sq'),cx('chart-color'))} data-bg="#eb6459" style={{background: 'rgb(235, 100, 89)'}}></span>
                                                                <span className={cx('chart-label')}>CHI TIÊU</span>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                    <div className={cx('nk-ecwg8-ck')}>
                                                        <div className={cx('chartjs-size-monitor')}>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    <div className={cx('col-lg-4',cx('col-md-6'))}>
                                        <div className={cx('card',cx('card-full'),cx('overflow-hidden'))}>
                                            <div className={cx('nk-ecwg',cx('nk-ecwg7'),cx('h-100'))}>
                                                <div className={cx('card-inner',cx('flex-grow-1'))}>
                                                    <div className={cx('card-title-group',cx('mb-4'))}>
                                                        <div className={cx('card-title')}>
                                                            <h6 className={cx('title')}>TỔNG ĐƠN</h6>
                                                        </div>
                                                    </div>

                                                    <div className={cx('nk-ecwg7-ck')}></div>

                                                    <ul className={cx('nk-ecwg7-legends',cx('chart-orders'))}>
                                                        <li>
                                                            <div className={cx('title')}>
                                                                <span className={cx('dot',cx('dot-lg'),cx('sq'),cx('chart-color'))} data-bg="#6576ff"style={{background: 'rgb(129, 107, 255)'}}></span>
                                                                <span className={cx('chart-label')}>Hoàn thành</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={cx('title')}>
                                                                <span className={cx('dot',cx('dot-lg'),cx('sq'),cx('chart-color'))} data-bg="#6576ff"style={{background: 'rgb(19, 201, 242)'}}></span>
                                                                <span className={cx('chart-label')}>Đang chạy</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={cx('title')}>
                                                                <span className={cx('dot',cx('dot-lg'),cx('sq'),cx('chart-color'))} data-bg="#6576ff"style={{background: 'rgb(255, 130, 183)'}}></span>
                                                                <span className={cx('chart-label')}>Huỷ đơn</span>
                                                            </div>
                                                        </li>
                                                    </ul>
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

export default Content;